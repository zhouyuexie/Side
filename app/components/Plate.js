
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	ScrollView,
	LayoutAnimation,
	Animated,
	PanResponder
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {jumpUseName} from "../components/RouteStack";

class Plate extends Component {
	static get defaultProps(){
		return {
			HeadTitle:"热门视频"
		}
	}
	state={
		width:0,//设置显示和隐藏
		continuePull:false,//继续下来,显示不同的文本
		NowGo:false,//是否开始跳转,
		bounceValue:new Animated.Value(0),
		isAnim:true,
		imgwidth:0,
	}
	render(){		
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.HeadTitle}</Text>
				<ScrollView 
					style={styles.imageItem} 
					horizontal={true}
					scrollEventThrottle={150}
					showsHorizontalScrollIndicator={false}
					{...this._panResponder.panHandlers}
					onScroll={(e)=>{this._handleScroll(e)}}
					>
					{this.props.HomeVideo.map((data)=>{
						return this._renderPlate(data);
					})}
				</ScrollView>
				<View style={styles.containimg}>
					<Image style={[styles.continueimg,{width:this.state.imgwidth}]} source={require("../assest/plane.png")}></Image>
				</View>
				<Animated.View style={styles.continue}>
					<Text style={[styles.continuetext,{width:this.state.width}]}>{this.state.continuePull?"即将起飞":"起飞准备"}</Text>
				</Animated.View>
			</View>
		)
	}
	_renderPlate(data){
		return (
			<TouchableOpacity 
				style={styles.body}
				activeOpacity={1}
				key={data.Id}
				onPress={()=>{this._onPress(data.Title,data.Url,data.Author)}}>
				<Image source={{uri:data.Avatar}} style={styles.image} />
				<Text numberOfLines={1} style={styles.bodytext}>{data.Title}</Text>
				<View style={styles.footer}>
					<Icon name="eye" size={14} color="#A4A4A4" />
					<Text style={styles.footertext}>{data.ReadCount}</Text>
					<Icon name="commenting-o" size={14} color="#A4A4A4" />
					<Text style={styles.footertext}>{data.CmtCount}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	_onPress(Title,Url,Author){
		
	}
	_handleScroll(e){
		// LayoutAnimation.easeInEaseOut();
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		let offsetX = e.nativeEvent.contentOffset.x;//左边距离开始的距离
		let ScrollWidth = e.nativeEvent.contentSize.width;//整个滚动的长度
		// 如果左边距离加屏幕宽度大于整个滚动条的长度
		this.state.imgwidth = offsetX+Width-ScrollWidth;

		if(offsetX+Width>ScrollWidth+10){
			if(offsetX+Width-ScrollWidth>70){
				// 如果拉的更多就可以释放更新,再记录下来
				if(this.state.NowGo&&this.state.continuePull&&this.state.width===20){
					this.setState({
						NowGo:false
					});
					return;
				}
				this.setState({
					continuePull:true,
					NowGo:true,
					width:20
				});
			}
			else{
				this.setState({
					width:20,
					continuePull:false,
				});
			}
			
		}
		else{
			this.setState({
				width:0,
				continuePull:false,
				imgwidth:0
			});
		}
	}
	componentWillMount(){
		this._panResponder = PanResponder.create({
			// 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,

			onPanResponderGrant: (evt, gestureState) => {
				// 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
				Reactotron.log("onPanResponderGrant")
				// gestureState.{x,y}0 现在会被设置为0
			},
			onPanResponderMove: (evt, gestureState) => {
				// 最近一次的移动距离为gestureState.move{X,Y}
				Reactotron.log("onPanResponderMove")
				// 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
			},
			onPanResponderRelease: (evt, gestureState) => {
				// 用户放开了所有的触摸点，且此时视图已经成为了响应者。
				// 一般来说这意味着一个手势操作已经成功完成。
				Reactotron.log("onPanResponderRelease")
			},
			onPanResponderEnd:(evt, gestureState)=>{
				Reactotron.log("onPanResponderEnd")
			},
			onPanResponderTerminate: (evt, gestureState) => {
				// 另一个组件已经成为了新的响应者，所以当前手势将被取消。
				Reactotron.log("onPanResponderTerminate")
			},
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
				// 默认返回true。目前暂时只支持android。
				return true;
			},
		});
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,
		justifyContent: "space-around",
		backgroundColor: "#FFF", 
		paddingTop:15,
		paddingBottom:5,
		paddingLeft:10,
		marginTop:10,
	},
	title:{
		fontSize:15,
		color:"#555",
	},
	imageItem:{
		marginTop:10,
		marginBottom:8,
	},
	image:{
		width:140,
		height:100,
		marginRight:8,
		resizeMode:"cover"
	},
	bottomText:{
		flexDirection:'row',
		position:"relative",
	},
	left:{
		justifyContent: "flex-start",
		fontSize:13,
		color:"#555",
	},
	right:{
		fontSize:11,
		color:"#555",
		position:"absolute",
		bottom:0,
		left:145,
	},
	continue:{
		alignItems:"center",
		position:"absolute",
		right:0,
		top:50,
		justifyContent:"center",
		flexDirection:"row",
		backgroundColor:"#999",
		width:20
	},
	containimg:{
		width:20,
		position:"absolute",
		top:50,
		right:0
	},
	continueimg:{
		width:42,
		height:50,
		resizeMode:"contain",
		position:"absolute",
		top:10,
		right:20
	},
	continuetext:{
		width:0,
		color:"#000",
		// opacity:0,
		backgroundColor:"transparent",
		position:"absolute",
		right:0
	},
	body:{
		flexDirection:"column",
		width:150
	},
	bodytext:{
		fontSize:14,
		color:"#444",
		marginTop:5
	},
	footer:{
		flexDirection:"row",
		marginTop:5
	},
	footertext:{
		color:"#999",
		marginRight:10,
		marginLeft:2,
		fontSize:12
	}
});

function select(store){
	return {
		HomeVideo:store.homeStore.HomeVideo,
	}
}

export default connect(select)(Plate);
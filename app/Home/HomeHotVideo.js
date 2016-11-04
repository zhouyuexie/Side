
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
	Animated
} from 'react-native';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";

class HomeHotVideo extends Component {
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
				<Text style={styles.title}>热门视频</Text>
        <ScrollView 
        	style={styles.imageItem} 
        	horizontal={true}
        	scrollEventThrottle={150}
        	showsHorizontalScrollIndicator={false}
        	onScroll={(e)=>{this._handleScroll(e)}}
        	>
					<Image source={require('../assest/1_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/2_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/1_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/2_product_pic.png')} style={styles.image} />
				</ScrollView>
				<View style={styles.containimg}>
					<Image style={[styles.continueimg,{width:this.state.imgwidth}]} source={require("../assest/plane.png")}></Image>
				</View>
				<Animated.View style={styles.continue}>
					<Text style={[styles.continuetext,{width:this.state.width}]}>{this.state.continuePull?"即将起飞":"起飞准备"}</Text>
				</Animated.View>
				<View style={styles.bottomText}>
					<Text style={styles.left}>十分钟教会你化妆</Text>
					<Text style={styles.right}>1024</Text>
				</View>
    	</View>
		)
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
    paddingBottom:10,
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
		width:Width/3+5,
		height:Width/4,
		marginRight:8,
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
	}
});

export default HomeHotVideo;
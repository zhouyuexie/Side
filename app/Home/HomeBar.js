
import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Platform,
	LayoutAnimation,
	Alert
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeBar extends Component {	
	//定义属性类型
	propTypes:{
		Menu:PropTypes.array.isRequired
	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	static get defaultProps(){
		return {
			Menu:["身边事","车票预订","身边视频","生活114","非诚勿扰","招聘求职","房屋租售","吃喝玩乐"]
		}
	}
	render(){
		let length = this.props.Menu.length/2;
		let top = this.props.Menu.slice(0,length);
		let down = this.props.Menu.slice(length);
		return(
			<View style={styles.container}>
				<View style={styles.topdown}>
					{top.map((data)=>{
						return this._renderMenu(data);
					})}
				</View>
				<View style={styles.topdown}>
					{down.map((data)=>{
						return this._renderMenu(data);
					})}
				</View>
			</View>
		)
	}
	_renderMenu(data){
		return (
			<TouchableOpacity 
				key={data} 
				activeOpacity={0.8} 
				style={styles.align}
				onPress={()=>{this._onPress(data)}}>
				<Image source={require('../assest/icon_5_self.png')} style={styles.image} />
				<Text style={styles.text}>{data}</Text>
			</TouchableOpacity>
		)
	}
	_onPress(data){
		Alert.alert("你点击了",data)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
		justifyContent: "center",
		alignItems:"center",
		backgroundColor: "#FFF", 
		marginTop:10,
		flexWrap:"wrap"
	},
	align:{
		alignItems:"center",
		justifyContent:"center",
		flex:1,
	},
	image:{
		width:45,
		height:45,
		marginBottom:5,
		resizeMode: "contain",
	},
	text:{
		fontSize:14,
		color:"#555",
	},
	topdown:{
		flexDirection:"row",
		marginTop:5,
		marginBottom:5
	}
});

export default HomeBar;
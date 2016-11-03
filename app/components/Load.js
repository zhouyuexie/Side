import React, { Component,PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	Platform,
	Animated,
	Alert
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reactotron from 'reactotron-react-native';

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息
const LoadImage = [
	require("../assest/load1.gif"),
	require("../assest/Load2.gif"),
	require("../assest/Load3.gif"),
	require("../assest/Load4.gif"),
	require("../assest/Load6.gif"),
	require("../assest/Load7.gif"),
]

class Load extends Component{
	propTypes:{
		// title:PropTypes.string.isRequired,
		ref:PropTypes.string.isRequired,
		opacity:PropTypes.number,
		bgColor:PropTypes.string,
		hasChildren:PropTypes.bool,
		isShow:PropTypes.bool,
		Image:PropTypes.number,
		showBtn:PropTypes.bool,
		BtnStyle:PropTypes.any
	}
	static get defaultProps(){
		return {
			onLoadEnd:()=>{},
			opacity:0.5,
			bgColor:"#000000",
			isShow:false,
			hasChildren:false,//默认没有子类
			Image:1,
			showBtn:false,
			BtnStyle:{}
		}
	}
	constructor(props){
		super(props);
		this.state = {
			fadeIn: new Animated.Value(0),
			fadeOut: new Animated.Value(0),
			zIndex:10,
		}
	}
	render() {
		if(this.props.NoShowLoad){
			return null;
		}
		return (
			<View style={[styles.container,{zIndex:this.props.isShow?this.state.zIndex:-10}]}>
				<Animated.View style={[styles.center,{backgroundColor:this.props.bgColor,opacity:this.props.opacity}]}>
					{this.isCustom()}
				</Animated.View>
			</View>
		)
	}
	isCustom(){
		// 是否有子元素
		if(this.props.hasChildren){
			return React.cloneElement(this.props.children);
		}
		else{
			return (
				<View>
					<Image style={[styles.img,{width:this.props.Image===0?120:150,height:this.props.Image===0?120:150}]} onPress={()=>{this._onPress()}} source={LoadImage[this.props.Image]} />
					{this._showButton()}
				</View>
			)
		}
	}
	_showButton(){
		// 如果现实退出按钮
		if(this.props.showBtn){
			return (
				<TouchableOpacity 
					style={[styles.close,this.props.BtnStyle]}
					activeOpacity={0.9}
					onPress={()=>{this._onPress()}}>
					<Icon name="times" size={15} color="#fff"></Icon>
				</TouchableOpacity>
			)
		}
		return null;
	}
	_onPress(){
	// 	const {navigator} = this.props;
	// 	navigator.pop();
		this.CloseLoad();
	}
	CloseLoad(){
		this.setState({
			zIndex:-10
		});
		// this.state.fadeIn.setValue(0);
	}
	OpenLoad(){
		this.setState({
			zIndex:10
		});
	}
	setTimeClose(time){
		this.OpenLoad();
		setTimeout(()=>{
			this.CloseLoad();
		},time)
	}
	componentDidMount(){
		this.props.onLoadEnd();
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
		// backgroundColor:"rgba(255,255,255,0.9)",
		// backgroundColor:"#3ca7f4",
	},
	center:{
		position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems:"center"
	},
	img:{
		width:150,
		height:150,
		borderRadius:20,
		resizeMode:"cover",
    backgroundColor: 'transparent',
	},
	close:{
		position:"absolute",
		top:5,
		right:5,
		backgroundColor:"#3ca7f4",
		borderRadius:10,
		width:20,
		height:20,
		borderWidth:2,
		borderColor:"#fff",
		justifyContent:"center",
		alignItems:"center"
	}
});

export default Load;
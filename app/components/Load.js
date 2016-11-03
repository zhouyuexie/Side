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

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

class Load extends Component{
	propTypes:{
		// title:PropTypes.string.isRequired,
		ref:PropTypes.string.isRequired,
		opacity:PropTypes.number,
		bgColor:PropTypes.string
	}
	static get defaultProps(){
		return {
			onLoadEnd:()=>{},
			opacity:0.5,
			bgColor:"#fff"
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
			<View style={[styles.container,{zIndex:this.state.zIndex}]}>
				<Animated.View style={[styles.center,{backgroundColor:this.props.bgColor,opacity:this.props.opacity}]}>
					<Image style={styles.img} onPress={()=>{this._onPress()}} source={require("../assest/load1.gif")} />
					{/*<TouchableOpacity 
											style={styles.close}
											activeOpacity={0.9}
											onPress={()=>{this._onPress()}}>
											<Icon name="times" size={16} color="#fff"></Icon>
										</TouchableOpacity>*/}
				</Animated.View>
			</View>
		);
	}
	_onPress(){
	// 	const {navigator} = this.props;
	// 	navigator.pop();
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
    opacity: 0.5,
    justifyContent: 'center',
    alignItems:"center"
	},
	img:{
		width:100,
		height:100,
		borderRadius:20,
		resizeMode:"cover",
    backgroundColor: '#ffffff',
	},
	close:{
		position:"absolute",
		top:10,
		right:10,
		backgroundColor:"#3ca7f4",
		borderRadius:12,
		width:24,
		height:24,
		borderWidth:1,
		borderColor:"#fff",
		justifyContent:"center",
		alignItems:"center"
	}
});

export default Load;
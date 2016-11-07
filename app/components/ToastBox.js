// 这是home最开头的文件，包含了定位和查找商家功能

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
	Animated
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class ToastBox extends Component{
	state = {
		TopY:new Animated.Value(0),
		DownY:new Animated.Value(0),
		height:0
	}
	render(){
		return(
			<View style={[styles.container,{height:this.state.height}]}>
				<Animated.View style={[
					styles.body,
					// {
					// transform: [{
					//  translateY: this.state.TopY.interpolate({
					// 	 inputRange: [0, 1],
					// 	 outputRange: [0, 20]
					//  })
				 // },{
					//  translateY: this.state.DownY.interpolate({
					// 	 inputRange: [0, 1],
					// 	 outputRange: [0, -20]
					//  })
				 // }
				 // ]
				// }
				]}>
					<Text>刷新成功,更新15条数据</Text>
				</Animated.View>
			</View>
		)
	}
	Start(){
		// this.state.TopY.setValue(0);
		
		// Animated.timing(this.state.TopY,{
		// 	toValue:1,duration:250,delay:150
		// }).start();
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		this.setState({
			height:30
		})
	}
	End(){
		// this.state.DownY.setValue(0);

		// Animated.timing(this.state.DownY,{
		// 	toValue:1,duration:250,delay:150
		// }).start();
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		this.setState({
			height:0
		})
	}
	SetTime(time){
		this.Start();
		setTimeout(()=>{
			this.End();
		},time);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center",
		width:Width,
		backgroundColor:"#999",
		marginTop:55,
	},
	body:{
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center",
	}
});

export default ToastBox;
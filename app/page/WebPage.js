import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	WebView,
	ListView,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈
import Reactotron from 'reactotron-react-native';

const ImageWidthJavaScript = 'window.onload=function(){var jigu_img = document.getElementsByTagName("img");for(var i =0;i<jigu_img.length;i++){jigu_img[i].style.width = "'+Width+'px"}}'

const ReadArticle = React.createClass({
	propTypes:{
		title:PropTypes.string.isRequired,
		url:PropTypes.string,
		avatar:PropTypes.string,
		abstract:PropTypes.string,
		source:PropTypes.string.isRequired,
		content:PropTypes.string,
	},
	getDefaultProps(){
		return {
			articles:[],
			isWeb:false
		}
	},
	getInitialState(){
		return {
			isLoad:true
		}
	},
	render(){
		const {RootNavigator} = this.props;

		return this._renderWeb(this.props.isWeb)
	},
	_renderWeb(isWeb){
		// 如果是网页的话
		if(isWeb){
			return(
				<View style={styles.root}>
					<WebView 
						onLoad={()=>{}} 
						source={{uri:this.props.source}}
						injectedJavaScript={ImageWidthJavaScript}
						scalesPageToFit={false}
						bounces={true} />
				</View>
			)
		}
		else{
			// 传进来的是html字符串
			return(
				<View style={styles.root}>
					<WebView onLoad={()=>{}}
						source={{html:this.props.source}}
						injectedJavaScript={ImageWidthJavaScript}
						scalesPageToFit={false}
						bounces={true} />
				</View>
			)
		}
	}
})

const styles = StyleSheet.create({
	root:{
		width:Width,
		flexDirection:"column",
		backgroundColor:"#fff",
		flex:1,
		marginTop:20
	}
});

export default ReadArticle;
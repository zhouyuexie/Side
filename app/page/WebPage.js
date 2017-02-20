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
import {PromiseGetData} from "../Update";
import {jumpUseName} from "../components/RouteStack";//路由栈
import Reactotron from 'reactotron-react-native';
import Load from "../components/Load";

const ImageWidthJavaScript = 'window.onload=function(){var jigu_img = document.getElementsByTagName("img");for(var i =0;i<jigu_img.length;i++){jigu_img[i].style.width = "'+Width+'px"}}'

const ReadArticle = React.createClass({
	propTypes:{
		title:PropTypes.string.isRequired,
		url:PropTypes.string,
		avatar:PropTypes.string,
		abstract:PropTypes.string,
		source:PropTypes.string,
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
			isLoad:true,
			source:""
		}
	},
	render(){
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
						automaticallyAdjustContentInsets={true}
						bounces={true} />
				</View>
			)
		}
		else{
			// 传进来的是html字符串
			// if(this.state.isLoad){
			// 	return (
			// 		<Load isShow={true} bgColor="#fff" ref="Load" />
			// 	)
			// }
			return(
				<View style={styles.root}>
					<WebView 
						onLoad={()=>{}}
						source={{html:this.state.source}}
						injectedJavaScript={ImageWidthJavaScript}
						scalesPageToFit={false}
						automaticallyAdjustContentInsets={true}
						bounces={true} />
					<Load isShow={true} bgColor="#fff" ref="Load" />
				</View>
			)
		}
	},
	componentWillMount(){
		if(!this.props.isWeb){
			// html格式的
			PromiseGetData(this.props.url).then((data)=>{
				if(!data){
					// 找不到文章
					this.refs.Load.CloseLoad();
					const { RootNavigator } = this.props;
					Alert.alert("提示","找不到文章!",[
						{text: '返回', onPress: () => RootNavigator.pop()},
					]);
				}
				this.setState({
					isLoad:false,
					source:data.Source
				});
				this.refs.Load.CloseLoad();
			}).catch((e)=>{
				// 记录错误
				Reactotron.log("WebPage:"+e)
			});
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
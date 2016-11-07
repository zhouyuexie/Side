import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	WebView,
} from 'react-native';
import {Width,Height,Scale} from "../../components/DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

import PostHead from "../../components/PostHead";//帖子信息（头像、发帖人、时间）
import PostFoot from "../../components/PostFoot";//(举办、回复)

export default class PostContent extends Component {
	//定义属性类型
	propTypes:{
		// source:PropTypes.string.isRequired,
	}
	static get DefaultProps(){
		return {
			isWeb:false
		}
	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}	
	render(){
		return (
			<View style={styles.container}>
				<PostHead pictrue={require('../../assest/profile.jpg')}
					author="咩咩sandy" time="10-09 13:05" floor="楼主" />
					{this._renderWeb(this.props.isWeb)}
				<PostFoot />
			</View>
		)
	}
	_renderWeb(isWeb){
		// 如果是网页的话
		if(isWeb){
			return(
				<View>
					<WebView style={styles.webview} onLoad={()=>{}} source={{uri:this.props.source}} />
				</View>
			)
		}
		else{
			// 传进来的是html字符串
			return(
				<View>
					<WebView onLoad={()=>{}} source={{html:this.props.source}} />
				</View>
			)
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
		backgroundColor: "#FFF",
		marginVertical:8,  
	},
	webview:{
		flex:1,
	}
});
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	WebView,
} from 'react-native';

import Reactotron from 'reactotron-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import BarHeader from "../components/BarHeader";//标头
import CardHeader from "../components/CardHeader";//标题
import PostHead from "../components/PostHead";//帖子信息（头像、发帖人、时间）
import PostFoot from "../components/PostFoot";//(举办、回复)
import PostBottom from "./post/PostBottom";//底部

class PostDetail extends Component {
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
			exitStartTime:null,
			isRefreshing : false,
			updateAlpha:0
		}
	}	
	render(){
		const { RootNavigator } = this.props;
		// let titles = "xx人都想知道的当地60种超赞小吃，史上最虐心美食~";		
		return(
			<View style={styles.root}>
				<BarHeader RootNavigator={RootNavigator} />
				<ScrollView style={styles.container} showsVerticalScrollIndicator = {false}>
					<CardHeader title={this.props.title} time="20分钟前" comment="30" RootNavigator={RootNavigator} />
					<PostHead pictrue={require('../assest/profile.jpg')}
					author="咩咩sandy" time="10-09 13:05" floor="楼主" />
					{this._renderWeb(this.props.isWeb)}
					<PostFoot />
					<PostHead pictrue={require('../assest/profile.jpg')}
					author="等风来" time="2015-10-09" floor="沙发" />

					<PostFoot />
					<PostHead pictrue={require('../assest/profile.jpg')}
					author="二狗子" time="2015-10-09" floor="沙发" />

					<PostFoot />
				</ScrollView>
				<PostBottom />
			</View>
		)
	}
	_renderWeb(isWeb){
		// 如果是网页的话
		if(isWeb){
			return(
				<View>
					<WebView onLoad={()=>{}} source={{uri:this.props.source}} />
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
	root:{
		flex:1,
		backgroundColor: "#fff", 
	},
	container:{
		marginTop:55,
		backgroundColor: "#d5d5d5", 
	}
});

export default PostDetail;
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image
} from 'react-native';

import Reactotron from 'reactotron-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import BarHeader from "../components/BarHeader";//标头(详情)
import CardHeader from "../components/CardHeader";//标题
import PostContent from "./post/PostContent";//帖子内容
import PostComment from "./post/PostComment";//帖子评论
import PostBottom from "./post/PostBottom";//底部

class PostDetail extends Component {
	//定义属性类型
	propTypes:{
		// source:PropTypes.string.isRequired,
	}
	static get DefaultProps(){
		return {
			
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
		return(
			<View style={styles.root}>
				<ScrollView style={styles.container} showsVerticalScrollIndicator = {false}>
					<BarHeader RootNavigator={RootNavigator} />
					<CardHeader title={this.props.title} time="20分钟前" comment="30" RootNavigator={RootNavigator} />
					<PostContent />
					<PostComment />
					<PostBottom />
				</ScrollView>
			</View>
		)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1,
		backgroundColor: "#F0F2F6", 
	},
	container:{
		// flex:1,
	}
});

export default PostDetail;
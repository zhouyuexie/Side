import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Width,Height,Scale} from "../../components/DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

import PostHead from "../../components/PostHead";//帖子信息（头像、发帖人、时间）
import PostFoot from "../../components/PostFoot";//(举办、回复)

export default class PostComment extends Component {
	propTypes:{
		
	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}	
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.comment}>
					<PostHead pictrue={require('../../assest/profile.jpg')}
						author="等风来" time="2015-10-09" floor="沙发" />
						<Text style={styles.text}>不同批次生产的吧,口味差不会差太多的</Text>	
					<PostFoot />
				</View>
				<View style={styles.comment}>
					<PostHead pictrue={require('../../assest/profile.jpg')}
						author="二狗子" time="2015-10-09" floor="1楼" />
						<Text style={styles.text}>不同批次生产的吧,口味差不会差太多的</Text>
					<PostFoot />
				</View>
			</View>
		)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,  
		backgroundColor: "#F0F2F6",  
	},
	comment:{
		marginBottom:1,
		backgroundColor: "#FFF", 
	},
	text:{
		marginLeft:60,
		fontSize:12,
	}
});
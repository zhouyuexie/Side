import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostFoot extends Component {
	propTypes:{
		title:PropTypes.string.isRequired,
		time:PropTypes.string,
		comment:PropTypes.string
	}
	render(){
		return (
			<View style={styles.container}>
				<TouchableOpacity activeOpacity={0.8}>
					<Text style={styles.left}>举报</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} style={styles.right}>
					<Icon name="commenting-o" size={16} color="#41A2FF" />
					<Text style={styles.text}>回复</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,
		flexDirection:'row',
		justifyContent: "space-between",
	},
	left:{
		marginLeft:10,
	},
	right:{
		flexDirection:'row',
		marginRight:10,
	},
	text:{
		fontSize:12,
		color:"#41A2FF",
	},
});
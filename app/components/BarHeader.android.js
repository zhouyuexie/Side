import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BarHeader extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Icon style={styles.left} name="angle-left" size={18} color="#41A2FF" />
				<Text style={styles.text}>详情</Text>
				<View style={styles.right}>
					<Icon style={styles.thumbs} name="thumbs-o-up" size={18} color="#41A2FF" />
					<Icon style={styles.ellsipsis} name="ellipsis-v" size={18} color="#41A2FF" />
				</View>
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
	text:{
		fontSize:14,
	},
	right:{
		flexDirection:'row',
	},
	thumbs:{
		marginRight:15,
	},
	ellsipsis:{

	}
})
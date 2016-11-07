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
				<Icon style={styles.left} name="angle-left" size={26} color="#41A2FF" />
				<Text style={styles.text}>详情</Text>
				<View style={styles.right}>
					<Icon style={styles.thumbs} name="thumbs-o-up" size={22} color="#41A2FF" />
					<Icon style={styles.ellsipsis} name="ellipsis-v" size={18} color="#41A2FF" />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,
		height:50,
		flexDirection:'row',
		justifyContent: "space-between",
		alignItems:"center",
		marginBottom:1,
		backgroundColor: "#fff", 
	},
	left:{
		marginLeft:10,
	},
	text:{
		fontSize:16,
	},
	right:{
		flexDirection:'row',
		marginRight:10,
	},
	thumbs:{
		marginRight:25,
	},
	ellsipsis:{

	}
})
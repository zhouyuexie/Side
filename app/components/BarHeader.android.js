import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BarHeader extends Component {
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity activeOpacity={0.8}>
					<Icon style={styles.left} name="angle-left" size={26} color="#41A2FF" />
				</TouchableOpacity>
				<Text style={styles.text}>详情</Text>
				<View style={styles.right}>
					<TouchableOpacity activeOpacity={0.8}>
						<Icon style={styles.thumbs} name="thumbs-o-up" size={22} color="#41A2FF" />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8}>
						<Icon style={styles.ellsipsis} name="ellipsis-v" size={16} color="#41A2FF" />
					</TouchableOpacity>
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
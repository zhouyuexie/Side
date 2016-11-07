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
	render(){
		return (
			<View style={styles.container}>
				<TouchableOpacity activeOpacity={0.8}>
					<Icon style={styles.left} name="thumbs-o-up" size={18} color="#41A2FF" />
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} >
					<Text style={styles.middle}>写回应</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} style={styles.right}>
					<Text style={styles.one}>1/</Text>
					<Text style={styles.four}>4</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width;
		flexDirection:'row',
		justifyContent: "space-between",
	},
	left:{
		marginLeft:10,
		padding:15,
	},
	middle:{
		alignItems:"center",
		justifyContent:"center",
		paddingHorizontal:45,
		paddingVertical:15
	}
	right:{
		padding:15,
		marginRight:10,
	},
	one:{
		fontSize:16,
		color:"#41A2FF",
	}
	four:{
		fontSize:16,
		color:"#41A2FF",
	},
});
import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import {Width,Height,Scale} from "../../components/DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostFoot extends Component {
	render(){
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.left} activeOpacity={0.8}>
					<Icon name="thumbs-o-up" size={24} color="#d5d5d5" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.middle} activeOpacity={0.8} >
					<Text style={styles.text}>写回应</Text>
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
		width:Width,
		height:60,
		flexDirection:'row',
		justifyContent: "space-between",
		alignItems:"center",
		backgroundColor: "#F0F2F6",
	},
	left:{
		width:50,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#fff",
		marginLeft:8, 
	},
	middle:{
		// width:Width-130,
		flex:1,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#fff", 
		marginHorizontal:5
	},
	text:{
		fontSize:12,
		color:"#d5d5d5",
	},
	right:{
		width:50,
		height:50,
		flexDirection:'row',
		alignItems:"center",
		justifyContent:"center",
		backgroundColor: "#fff", 
		marginRight:8, 
	},
	one:{
		fontSize:18,
		color:"#41A2FF",
	},
	four:{
		fontSize:18,
		color:"#d5d5d5",
	},
});
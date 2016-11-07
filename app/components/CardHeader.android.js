import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CardHeader extends Component {
	propTypes:{
		title:PropTypes.string.isRequired,
		time:PropTypes.string,
		comment:PropTypes.string
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.up}>{this.props.title}</Text>
				<View style={styles.down}>
					<View style={styles.downbody}>
						<Icon name="eye" size={16} color="#A4A4A4" />
						<Text style={styles.text}>{this.props.time}</Text>
					</View>
					<View style={styles.downbody}>
						<Icon name="commenting-o" size={14} color="#A4A4A4" />
						<Text style={styles.text}>{this.props.comment}</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,
		backgroundColor: "#fff",
	},
	up:{
		fontSize:14,
		color:"#666",
		lineHeight:24,
		padding:10
	},
	down:{
		flexDirection:"row",
		alignItems:"center",
		justifyContent: "flex-end",
		marginBottom:10,
	},
	downbody:{
		flexDirection:"row",
		alignItems:"center",
		marginLeft:10,
		marginRight:10
	},
	text:{
		fontSize:12,
		color:"#A4A4A4",
		marginLeft:2
	}
});
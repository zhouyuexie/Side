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
		pictrue:PropTypes.array.isRequired,
		author:PropTypes.string,
		time:PropTypes.string,
		floor:PropTypes.string,	//楼主、沙发、1楼
	}
	static get defaultProps(){
		return {
			
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.left}>
					<Image source={this.props.pictrue} style={styles.image} />
					<View style={styles.AuthorTime}>
						<Text style={styles.Author}>{this.props.author}</Text>
						<Text style={styles.Time}>{this.props.time}</Text>
					</View>
				</View>
				<Text style={styles.right}>{this.props.floor}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,
		flexDirection:'row',
		alignItems:"center",
		justifyContent: "space-between",
		backgroundColor: "#fff",
		paddingVertical:15,
	},
	left:{
		flexDirection:'row',
	},
	image:{
		width: 40, 
    height: 40,
    borderRadius: 20,
    marginHorizontal:10
	},
	AuthorTime:{
		justifyContent:"center",
	},
	Author:{
		fontSize:12,
		// marginBottom:10,
	},
	Time:{
		fontSize:12,
		color:"#A4A4A4",
	},
	right:{
		fontSize:12,
		color:"#A4A4A4",
		justifyContent: "flex-end",
		marginRight:10,
	}
});
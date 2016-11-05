import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	ScrollView,
	Alert
} from 'react-native';

import Reactotron from 'reactotron-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import CardFooter from "../components/CardFooter";

class Post extends Component {	
	render(){		
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.Title}</Text>
        <Text numberOfLines={3} style={styles.content}>{this.props.Content}</Text>
				<CardFooter name={this.props.Author} readnumber={this.props.ReadCount} isPost={true} time={this.props.MTime} comment={this.props.CmtCount} />
    	</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		width:Width,
    justifyContent: "space-around",
    backgroundColor: "#FFF", 
    paddingTop:15,
    paddingBottom:10,
    paddingLeft:10,
    marginTop:10,
	},
	title:{
		fontSize:14,
		color:"#555",
		lineHeight:24,
		marginBottom:5,
	},
	content:{
		fontSize:12,
		lineHeight:22,
		marginBottom:8,
		color:"#A4A4A4",
	},
	bottomText:{
    flexDirection:'row',
		justifyContent: "space-between",
    position:"relative",
	},
	left:{
		fontSize:12,
		color:"#A4A4A4",
	},
	right:{
		flexDirection:'row',
	},
	text:{
		fontSize:12,
		color:"#A4A4A4",
		marginRight:10,
	},
	clock:{
		marginRight:4,
	},
	commenting:{
		// marginTop:1,
		marginLeft:14,
		marginRight:4,
	}
});

export default Post;
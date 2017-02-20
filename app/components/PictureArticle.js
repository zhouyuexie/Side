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

class PictureArticle extends Component {
//定义属性类型
	propTypes:{

	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}	
	render(){
		// Reactotron.log("PictureArticle.js"+this.props.Avatar)
		return(
			<View style={styles.container}>
				<View style={styles.content}>
					<Text numberOfLines={3} style={styles.title}>{this.props.Title}</Text>
					<Image style={styles.image} source={{uri:this.props.Avatar[0]}} />
        </View>
				<CardFooter name={this.props.Author} readnumber={this.props.ReadCount} isPost={true} time={this.props.MTime} comment={this.props.CmtCount} />
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
    justifyContent: "space-around",
    backgroundColor: "#FFF", 
    paddingTop:15,
    paddingBottom:10,
    paddingLeft:10,
    marginTop:10,
	},
	content:{
		flexDirection:'row',
		justifyContent: "space-between",
	},
	title:{
		width:Width/2+35,
		fontSize:14,
		color:"#555",
		lineHeight:24,
		marginBottom:5,
	},
	image:{
		width:Width/3-5,
		height:Width/4,
		marginRight:10,
		marginBottom:8,
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

export default PictureArticle;
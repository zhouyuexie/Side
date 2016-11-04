
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";

class HomeHotVideo extends Component {	
	render(){		
		return(
			<View style={styles.container}>
				<Text style={styles.title}>热门视频</Text>
        <ScrollView contentContainerStyle={styles.imageItem} horizontal = {true} showsHorizontalScrollIndicator = {false}>
					<Image source={require('../assest/1_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/2_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/1_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/2_product_pic.png')} style={styles.image} />
				</ScrollView>
				<View style={styles.bottomText}>
					<Text style={styles.left}>十分钟教会你化妆</Text>
					<Text style={styles.right}>1024</Text>
				</View>
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
	title:{
		fontSize:15,
		color:"#555",
	},
	imageItem:{
		marginTop:10,
		marginBottom:8,
	},
	image:{
		width:Width/3+5,
		height:Width/4,
		marginRight:8,
	},
	bottomText:{
    flexDirection:'row',
    position:"relative",
	},
	left:{
		justifyContent: "flex-start",
		fontSize:13,
		color:"#555",
	},
	right:{
		fontSize:11,
		color:"#555",
		position:"absolute",
		bottom:0,
		left:145,
	}
});

export default HomeHotVideo;
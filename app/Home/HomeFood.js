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

class HomeFood extends Component {	
	render(){		
		return(
			<View style={styles.container}>
				<Text style={styles.title}>xx人都想知道的当地60种超赞小吃，史上最虐心美食~</Text>
        <ScrollView contentContainerStyle={styles.imageItem} horizontal = {true} showsHorizontalScrollIndicator = {false}>
					<Image source={require('../assest/2_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/1_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/2_product_pic.png')} style={styles.image} />
					<Image source={require('../assest/1_product_pic.png')} style={styles.image} />
				</ScrollView>
				<View style={styles.bottomText}>
					<Text style={styles.left}>私家厨房</Text>
					<View style={styles.right}>
						<Icon style={styles.clock} name="clock-o" size={18} color="#A4A4A4" />
						<Text style={styles.text}>20分钟前</Text>
						<Icon style={styles.commenting} name="commenting-o" size={16} color="#A4A4A4" />
						<Text style={styles.text}>30</Text>
					</View>
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
    // height:200,
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
	},
	imageItem:{
		marginBottom:5,
	},
	image:{
		width:Width/3-5,
		height:Width/3,
		marginRight:8,
		resizeMode:"contain",
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
		marginLeft:14,
		marginRight:4,
	}
});

export default HomeFood;
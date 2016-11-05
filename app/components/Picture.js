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
import {PromiseGetData} from "../Update";
import {jumpUseName} from "../components/RouteStack";

class Picture extends Component {	
	render(){
		let Avatar = this.props.Avatar;
		let image = Avatar.split(",");//获取图片
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.Title}</Text>
        <ScrollView contentContainerStyle={styles.imageItem} horizontal = {true} showsHorizontalScrollIndicator = {false}>
					{image.map((data)=>{
						return this._renderImage(data);
					})}
				</ScrollView>
				<CardFooter name={this.props.Author} readnumber={this.props.ReadCount} isPost={true} time={this.props.MTime} comment={this.props.CmtCount} />
    	</View>
		)
	}
	_renderImage(data){
		return (
			<Image key={data} source={{uri:data.Url}} style={styles.image} />
			/*<TouchableOpacity
				activeOpactivy={1}
				key={"Picture"+data.Id}
				onPress={()=>{this._onPress(data.Url,data.Title)}}>
				
			</TouchableOpacity>*/
		)
	}
	// _onPress(Url,Title){
	// 	const { RootNavigator } = this.props;
	// 	// 获取文章数据跳过去
	// 	PromiseGetData(Url).then((data)=>{
	// 		jumpUseName(RootNavigator,"WebPage",{source:data.content,title:Title,isWeb:false});
	// 	}).catch((e)=>{
	// 		// 记录错误
	// 	});
	// }
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

export default Picture;
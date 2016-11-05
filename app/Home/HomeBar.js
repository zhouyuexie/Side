
import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Platform,
	LayoutAnimation,
	Alert
} from 'react-native';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeBar extends Component {	
	//定义属性类型
	propTypes:{
		HomeMenu:PropTypes.array.isRequired
	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	static get defaultProps(){
		return {
			
		}
	}
	render(){
		let length = this.props.HomeMenu.length/2;
		let top = this.props.HomeMenu.slice(0,length);
		let down = this.props.HomeMenu.slice(length);
		return(
			<View style={styles.container}>
				<View style={styles.topdown}>
					{top.map((data)=>{
						return this._renderMenu(data);
					})}
				</View>
				<View style={styles.topdown}>
					{down.map((data)=>{
						return this._renderMenu(data);
					})}
				</View>
			</View>
		)
	}
	_renderMenu(data){
		return (
			<TouchableOpacity 
				key={data.id} 
				activeOpacity={0.8} 
				style={styles.align}
				onPress={()=>{this._onPress(data.title,data.url,data.reqType)}}>
				<Image source={{uri:data.purl}} style={styles.image} />
				<Text style={styles.text}>{data.title}</Text>
			</TouchableOpacity>
		)
	}
	_onPress(title,url,reqType){
		// reqType为true说明是原生页面展示
		const { RootNavigator } = this.props;
		if(reqType){
			let page = JSON.parse(url);
			jumpUseName(RootNavigator,page.pageName,page.message);
		}
		else{
			jumpUseName(RootNavigator,"WebPage",{source:url,title:title,isWeb:true});
		}
		Alert.alert("你点击了",title)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
		justifyContent: "center",
		alignItems:"center",
		backgroundColor: "#FFF", 
		marginTop:10,
		flexWrap:"wrap",
		paddingTop:10,
		paddingBottom:10
	},
	align:{
		alignItems:"center",
		justifyContent:"center",
		flex:1,
	},
	image:{
		width:40,
		height:40,
		marginBottom:5,
		resizeMode: "contain",
	},
	text:{
		fontSize:14,
		color:"#555",
	},
	topdown:{
		flexDirection:"row",
		marginTop:5,
		marginBottom:5
	}
});

function select(store){
	return {
		HomeMenu:store.homeStore.HomeMenu,
	}
}

export default connect(select)(HomeBar);
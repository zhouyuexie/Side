import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	StatusBar,
	PixelRatio,
	BackAndroid,
	ToastAndroid,
	Navigator,
	Alert,
	RefreshControl,
	Platform
} from 'react-native';

import Reactotron from 'reactotron-react-native';

import HomeSearch from "./Home/HomeSearch"//搜索
import HomeSlider from "./Home/HomeSlider";//轮播图
import HomeBar from "./Home/HomeBar";//标头
import HomeHotVideo from "./Home/HomeHotVideo";//热门视频
import HomeFood from "./Home/HomeFood";//美食
import HomeNews from "./Home/HomeNews"//资讯
import HomePictureInfor from "./Home/HomePictureInfor";//图文信息
import Tabs from "./components/Tabs";//底部

import { connect } from 'react-redux';
import { LogIn, skipLogIn } from './action/ActionUser';

import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import {Refreshing,PromiseRefreshing} from "./Update";
import {routesNumber} from "./components/RouteStack";//路由信息

class Home extends Component{
	//定义属性类型
	propTypes:{

	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={styles.root}>
				<HomeSearch />
				<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator = {false}>
					<HomeSlider />
					<HomeBar />
					<HomeHotVideo />
					<HomeFood />
					<HomeNews />
					<HomePictureInfor />
				</ScrollView>
				<Tabs />
			</View>
		)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}	
}

const styles = StyleSheet.create({
	root:{
		flex:1,
		backgroundColor: "#F1F2F6", 
	},
	container:{
		marginTop:55,
	}
});

export default Home;
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
			exitStartTime:null,
			isRefreshing : false,
			updateAlpha:0
		}
	}
	render(){
		const { RootNavigator } = this.props;
		return(
			<View style={styles.root}>
				<HomeSearch RootNavigator={RootNavigator} />
				<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator = {false} refreshControl={
						<RefreshControl 
							refreshing={this.state.isRefreshing}
							onRefresh={()=>{this._onRefresh()}}
							title="小二努力刷新中..."
							color="#999"
							tintColor="#ffdc7e"
							progressBackgroundColor="#fff"
						/>
					}
					scrollEventThrottle={10}
					onScroll={(e)=>{this._handleScroll(e)}}>
					<HomeSlider RootNavigator={RootNavigator} />
					<HomeBar RootNavigator={RootNavigator} />
					<HomeHotVideo RootNavigator={RootNavigator} />
					<HomeFood RootNavigator={RootNavigator} />
					<HomeNews RootNavigator={RootNavigator} />
					<HomePictureInfor RootNavigator={RootNavigator} />
				</ScrollView>
<<<<<<< HEAD
				<Tabs onselect={0} RootNavigator={RootNavigator} />
				<Load isShow={true} bgColor="#000" hasChildren={false} Image={0} showBtn={false} BtnStyle={{backgroundColor:"#000"}} opacity={0.6} fadeWay="up" bgAnimate="default" ref="Load">
					<Image style={{width:100,height:100}} source={require("./assest/load1.gif")}></Image>
				</Load>
=======
				<Tabs RootNavigator={RootNavigator} />
>>>>>>> 64c3ab74a01af82a0f3d8e7309b692184226393d
			</View>
		)
	}
	componentWillMount(){
		const { RootNavigator } = this.props;
		Reactotron.log(routesNumber(RootNavigator));
		if(Platform.OS === "android"){
			BackAndroid.addEventListener("hardwareBackPress",()=>{
				const number = routesNumber(RootNavigator);//多少个路由
				// 监听android返回键
				if(!this.state.exitStartTime){
					this.state.exitStartTime = Date.now();
					ToastAndroid.show("再按一次退出程序",3);
					return true;
				}
				else{
					if(this.state.exitStartTime+3000>Date.now()){
						// 说明可以退出
						return false;
					}
					else{
						this.state.exitStartTime = Date.now();
						ToastAndroid.show("再按一次退出程序",3);
						return true;
					}
				}
			});
		}
	}
	componentDidMount(){
		
	}
	componentWillUnmount(){
		if(Platform.OS === 'android'){
			BackAndroid.removeEventListener("hardwareBackPress");
		}
		
	}
	_onRefresh(){
<<<<<<< HEAD
		this.setState({isRefreshing:true});
		PromiseRefreshing(this.props).then(()=>{
			this.refs.Load.setTimeClose();
			this.setState({
				isRefreshing:false
			});
			// Alert.alert("列表刷新完毕","可以继续刷新");
		})
=======
		// this.setState({isRefreshing:true});
		// PromiseRefreshing(this.props).then(()=>{
		// 	this.setState({
		// 		isRefreshing:false
		// 	});
		// 	// Alert.alert("列表刷新完毕","可以继续刷新");
		// })
>>>>>>> 64c3ab74a01af82a0f3d8e7309b692184226393d
		// Refreshing(this.props,()=>{
		// 	this.setState({
		// 		isRefreshing:false
		// 	});
		// 	Alert.alert("列表刷新完毕","可以继续刷新");
		// });
	}
	_handleScroll(e){
		// 改变头部透明度
		let alpha = (e.nativeEvent.contentInset.top + e.nativeEvent.contentOffset.y) / 200;

    this.setState({
    	updateAlpha:alpha
    });
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
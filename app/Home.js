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
	Platform,
	Image
} from 'react-native';

import Reactotron from 'reactotron-react-native';

import HomeSearch from "./Home/HomeSearch"//搜索
import HomeSlider from "./Home/HomeSlider";//轮播图
import HomeBar from "./Home/HomeBar";//标头
import Plate from "./components/Plate";//板块
import Picture from "./components/Picture";//全是图片
import Post from "./components/Post"//资讯,没有图
import PictureArticle from "./components/PictureArticle";//图文信息
import Tabs from "./components/Tabs";//底部

import { connect } from 'react-redux';

import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import {PromiseEmptyHomeData} from "./Update";
import {routesNumber} from "./components/RouteStack";//路由信息
import Load from "./components/Load";

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
				<ScrollView style={styles.container} showsVerticalScrollIndicator={false}
					refreshControl={
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
					<Plate RootNavigator={RootNavigator} />
					<Picture RootNavigator={RootNavigator} />
					<Post RootNavigator={RootNavigator} />
					<PictureArticle RootNavigator={RootNavigator} />
				</ScrollView>
				<Tabs onselect={0} RootNavigator={RootNavigator} />
				<Load isShow={true} bgColor="#000" hasChildren={false} Image={0} showBtn={false} BtnStyle={{backgroundColor:"#000"}} opacity={0.6} fadeWay="up" bgAnimate="opacity" ref="Load">
					<Image style={{width:100,height:100}} source={require("./assest/load1.gif")}></Image>
				</Load>
				<Tabs RootNavigator={RootNavigator} onselect={0} />
			</View>
		)
	}
	componentWillMount(){
		const { RootNavigator } = this.props;
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
		this.refs.Load.setTimeClose();
	}
	componentWillUnmount(){
		if(Platform.OS === 'android'){
			BackAndroid.removeEventListener("hardwareBackPress");
		}
		
	}
	_onRefresh(){
		this.refs.Load.setTimeClose();
		PromiseEmptyHomeData(this.props);
		// this.setState({isRefreshing:true});
		// PromiseRefreshing(this.props).then(()=>{
		// 	this.refs.Load.setTimeClose();
		// 	this.setState({
		// 		isRefreshing:false
		// 	});
		// 	// Alert.alert("列表刷新完毕","可以继续刷新");
		// })
		// this.setState({isRefreshing:true});
		// PromiseRefreshing(this.props).then(()=>{
		// 	this.setState({
		// 		isRefreshing:false
		// 	});
		// 	// Alert.alert("列表刷新完毕","可以继续刷新");
		// })
	}
	_handleScroll(e){
		// 改变头部透明度
		// let alpha = (e.nativeEvent.contentInset.top + e.nativeEvent.contentOffset.y) / 200;

  //   this.setState({
  //   	updateAlpha:alpha
  //   });
	}	
}

const styles = StyleSheet.create({
	root:{
		flex:1,
		backgroundColor: "#fff", 
	},
	container:{
		marginTop:55,
		backgroundColor: "#d5d5d5", 
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,//用户是否登录
		HomeDataReady:store.appStatusStore.HomeDataReady,//app首页是否加载完成数据,如果加载完成就进入首页
	}
}

export default connect(select)(Home);
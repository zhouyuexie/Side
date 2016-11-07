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
	TouchableOpacity,
	Platform,
	Image
} from 'react-native';

import Reactotron from 'reactotron-react-native';

import HomeSearch from "./Home/HomeSearch"//搜索
import HomeSlider from "./Home/HomeSlider";//轮播图
import HomeBar from "./Home/HomeBar";//标头
import Plate from "./components/Plate";//板块
import Tabs from "./components/Tabs";//底部
import HomeShow from "./Home/HomeShow";//根据数据来判断使用何种方式展示数据
import { connect } from 'react-redux';

import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import {GetHomeData,PromiseEmptyHomeData} from "./Update";
import {routesNumber} from "./components/RouteStack";//路由信息
import Load from "./components/Load";
import ToastBox from "./components/ToastBox";

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
				<ToastBox ref="ToastBox" />
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
					scrollEventThrottle={500}
					onScroll={(e)=>{this._handleScroll(e)}}>
					<HomeSlider RootNavigator={RootNavigator} />
					<HomeBar RootNavigator={RootNavigator} />
					<Plate RootNavigator={RootNavigator} />
					<HomeShow RootNavigator={RootNavigator} />
				</ScrollView>
				<Tabs onselect={0} RootNavigator={RootNavigator} />
				<Load isShow={false} bgColor="#000" hasChildren={false} Image={0} showBtn={false} BtnStyle={{backgroundColor:"#000"}} opacity={0.6} fadeWay="up" bgAnimate="opacity" ref="Load">
					<View style={{width:200,height:150,backgroundColor:"#fff"}}>
						<TouchableOpacity style={{backgroundColor:"#fff"}}>
							<Text style={{color:"#000"}}>关闭</Text>
						</TouchableOpacity>
					</View>
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
		// this.refs.Load.setTimeClose();
	}
	componentWillUnmount(){
		if(Platform.OS === 'android'){
			BackAndroid.removeEventListener("hardwareBackPress");
		}
		
	}
	_onRefresh(){
		// this.refs.Load.OpenLoad();
		// PromiseEmptyHomeData(this.props);
		this.setState({isRefreshing:true});
		GetHomeData(this.props).then(()=>{
			// this.refs.Load.CloseLoad();
			this.setState({
				isRefreshing:false
			});
			this.refs.ToastBox.SetTime(2000);
		})
		// this.setState({isRefreshing:true});
		// PromiseRefreshing(this.props).then(()=>{
		// 	this.setState({
		// 		isRefreshing:false
		// 	});
		// 	// Alert.alert("列表刷新完毕","可以继续刷新");
		// })
	}
	_handleScroll(e){
		const contentY = e.nativeEvent.contentSize.height;//整个页面的高度
		const nowY = e.nativeEvent.contentOffset.y;//现在顶部距离高度
		if(nowY+Height+100>contentY && !this.state.isLoadData){
			// 说明快接近底部了,并且没有已经在加载的数据,需要加载数据
			this.state.isLoadData = true;//正在加载数据

		}
	}	
}

const styles = StyleSheet.create({
	root:{
		flex:1,
		backgroundColor: "#fff",
	},
	container:{
		backgroundColor: "#d5d5d5",
    marginBottom:50,
	}
});

function select(store){
	return {
		isLogin:store.userStore.isLogin,//用户是否登录
		HomeDataReady:store.appStatusStore.HomeDataReady,//app首页是否加载完成数据,如果加载完成就进入首页
	}
}

export default connect(select)(Home);
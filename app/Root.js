/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator,
	Text,
	StatusBar,
	Image,
	Animated
} from 'react-native';
import { connect } from 'react-redux';
const InteractionManager = require('InteractionManager');

import {Routes} from "./components/RouteStack";//路由栈
import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import {GetHomeData,ChangeHomeReady} from "./Update";

class Root extends Component {
	state = {
		fadeAnim:new Animated.Value(0.2),
		ready:false
	}
	render() {
		if(!this.state.ready){
			return (
				<Animated.Image 
					style={{
						width:Width,height:Height,resizeMode:'stretch',
						opacity: this.state.fadeAnim
					}} 
					source={require("./assest/start1.jpg")} 
					/>
			)
		}
		return (
			<Navigator 
				initialRoute={Routes.Home}
				// initialRouteStack={RouteStack}
				configureScene={(route)=>{
					return route.animationType || Navigator.SceneConfigs.FadeAndroid;
				}}
				renderScene={(route,navigator)=>{
					let Component = route.component;
					return <Component {...route.params} RootNavigator={navigator} />
				}}/>
		);
	}
	componentWillMount(){
		Animated.timing(          // Uses easing functions
			 this.state.fadeAnim,    // The value to drive
			 {toValue: 1},           // Configuration
		 ).start();                // Don't forget start!
		// 全部执行完成才能进入界面
		Promise.all([
			GetHomeData(this.props).then(()=>{
				Promise.resolve();
			}),//获取首页数据,获取到数据后会更新HomeDataReady,然后就可以进入app界面
			new Promise((resolve,reject)=>{
				setTimeout(()=>{
					this.setState({ready:true});
				},2000);
			})
		]);
		// InteractionManager.runAfterInteractions(()=>{
		// 	GetHomeData(this.props).then(()=>{
		// 		this.setState({ready:true})
		// 	});//获取首页数据,获取到数据后会更新HomeDataReady,然后就可以进入app界面
		// })
		
	}
}

function select(store){
	return {
		isLogin:store.userStore.isLogin,//用户是否登录
	}
}

export default connect(select)(Root);
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
	Animated,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import {Routes} from "./components/RouteStack";//路由栈
import {Width,Height,Scale} from "./components/DeviceInfo";//获取设备信息
import Search from "./components/SearchBox";

class TabIcon extends React.Component {
	render(){
		return (
			<Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
		);
	}
}

const reducerCreate = params=>{
	const defaultReducer = Reducer(params);
	return (state, action)=>{
		console.log("ACTION:", action);
		return defaultReducer(state, action);
	}
};

class RouterRoot extends Component {
	render() {
		return (
			<Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
				<Scene key="modal" component={Modal}>
					<Scene key="root" hideNavBar={false}>

						<Scene key="tabbar" 
							tabs={true}
							tabBarStyle={styles.tabBarStyle}
							tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
							<Scene key="tab3" component={Search} title="发现" hideTabBar={true} icon={TabIcon}/>
							<Scene key="tab3" component={Search} title="个人中心" hideTabBar={true} icon={TabIcon}/>
							<Scene key="tab3" component={Search} title="个人中心" hideTabBar={true} icon={TabIcon}/>
						</Scene>
					</Scene>
				</Scene>
			</Router>
		);
	}
	componentWillMount(){
		
	}
}

const styles = StyleSheet.create({
	tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
})

export default RouterRoot;
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { LogIn, skipLogIn } from '../action/ActionUser';
import {Routes,jumpUseName} from "../components/RouteStack";//路由栈

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class Tabs extends Component{
	//定义属性类型
	propTypes:{

	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		let iconSize = 26;
		return(
			<View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} style={styles.tab}>
          <Icon name="th-large" size={iconSize} color="#FF4D00" />
          <Text style={styles.tabtext}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tab}>
          <Icon name="search" size={iconSize} color="#999" />
          <Text style={styles.tabtext}>发现</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tab}>
          <Icon name="user" size={iconSize} color="#999" />
          <Text style={styles.tabtext}>身边</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tab}>
          <Icon name="user" size={iconSize} color="#999" />
          <Text style={styles.tabtext}>公众号</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tab}>
          <Icon name="user" size={iconSize} color="#999" />
          <Text style={styles.tabtext}>我的</Text>
        </TouchableOpacity>
     </View>
		)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container: {
		width:Width,
		flexDirection:"row",
		backgroundColor: '#fff',
		height:50,
		alignItems:"center",
		position:"absolute",
		bottom:0,
		left:0,
		zIndex:10,
	},
	tab:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	tabtext:{
		fontSize:12
	}
});

export default Tabs;
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
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { LogIn, skipLogIn } from '../action/ActionUser';
import {Routes,jumpUseName} from "../components/RouteStack";//路由栈

import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息

import Icon from 'react-native-vector-icons/FontAwesome';

class Tabs extends Component{
	//定义属性类型
	propTypes:{
		onselect:React.PropTypes.number,
		RootNavigator:React.PropTypes.object.isRequired
	}
	static get defaultProps(){
		return {
			onselect:0,
			Tabs:["首页","发现","身边","公众号","我的"]
		}
	}
	_onPress(index){
		const { RootNavigator } = this.props;
		if(RootNavigator){
			switch(index){
				case 0:
					jumpUseName(RootNavigator,"Home");
					break;
				case 1:
					jumpUseName(RootNavigator,"Seller");
					break;
				case 2:
					jumpUseName(RootNavigator,"Users");
					break;
			}
		}
	}
	render(){
		let iconSize = 26;
		return(
			<View style={styles.container}>
				{this.props.Tabs.map((data,index)=>{
					return this._renderTab(data,index);
				})}
		 </View>
		)
	}
	_renderTab(data,index){
		let iconSize = 26;
		return (
			<TouchableOpacity 
				key={"tabs"+index}
				activeOpacity={0.8} 
				onPress={()=>{this._onPress(index)}}
				style={styles.tab}>
				<Icon name="user" size={iconSize}  color={this.props.onselect===index?"#FF4D00":"#999"} />
				<Text style={[styles.tabtext,{color:this.props.onselect===index?"#FF4D00":"#999"}]}>{data}</Text>
			</TouchableOpacity>
		)
	}
	shouldComponentUpdate(newvalue,oldvalue){
		return newvalue.onselect !== this.props.onselect
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
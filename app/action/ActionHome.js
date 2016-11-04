"use strict";
// 这个是定义的动作,每个动作都是一个函数
// 调用动作来改变对应的数据
import Reactotron from 'reactotron-react-native';
import {HOME,APPSTATUS} from "./ActionType";
import {Home} from "../Configure";//获取数据
const Link = Home.Link;//首页各种获取数据的链接

// 获取主页列表数据操作(改变的意思是只有当数据源改变的时候才会从服务器获取数据,如果没有改变则直接拿本地数据)
export function ChangeList(){
	return (dispatch) => {
		fetch(Link.HomeIndex)
			.then((response)=>response.json())
			.then((res)=>{
				dispatch({"type":HOME.GET_LIST,HomeList:res.data});
			})
			.catch((error)=>{
				// dispatch({"type":HOME.LOG_ERROR,"error":error});
			})
	}
}

export function EmptyList(){
	return (dispatch) => {
		dispatch({"type":HOME.GET_LIST,HomeList:[]});
	}
}

// 获取首页数据
export function GetHomeIndexData(){
	return (dispatch) => {
		fetch(Link.HomeIndex)
			.then((response)=>response.json())
			.then((res)=>{
				dispatch({"type":HOME.GET_SLIDER,HomeSlider:res.data.carousels});
				dispatch({"type":HOME.GET_MENU,HomeSlider:res.data.navs});
				dispatch({"type":HOME.GET_VIDEO,HomeSlider:res.data.videos});
				dispatch({"type":HOME.GET_LIST,HomeSlider:res.data.docs});
				dispatch({"type":APPSTATUS.HOMEDATAREADY,HomeDataReady:true});//首页数据准备完成,可以开始进入页面
			})
			.catch((error)=>{
				// dispatch({"type":HOME.LOG_ERROR,"error":error});
			})
	}
}
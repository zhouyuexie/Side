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

// 清空首页全部数据
export function EmptyHomeData(){
	return (dispatch) => {
		return new Promise((resolve,reject)=>{
			dispatch({"type":HOME.DMPTYDATA});
			resolve();
		});
	}
}

// 获取首页数据
export function GetHomeIndexData(){
	return (dispatch) => {
		return new Promise((resolve,reject)=>{
			fetch(Link.HomeIndex)
				.then((response)=>response.json())
				.then((res)=>{
					// Promise.all([])
					dispatch({"type":HOME.GET_SLIDER,HomeSlider:res.data.carousels,});
					dispatch({"type":HOME.GET_MENU,HomeMenu:res.data.navs});
					dispatch({"type":HOME.GET_VIDEO,HomeVideo:res.data.videos});
					dispatch({"type":HOME.GET_LIST,HomeList:res.data.docs});
					resolve();
				})
				.catch((error)=>{
					// dispatch({"type":HOME.LOG_ERROR,"error":error});
					reject(error)
				})
		})
	}
}
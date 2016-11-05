"use strict";

import {HOME} from "../action/ActionType";
import {Home} from "../Configure";//导入主页数据

// 根据动作类型的返回值改变主页数据
export default function ReducerHome(state=Home,action){
	switch(action.type){
		case HOME.GET_SLIDER:
			// Object.assign是es6的方法,使用 Object.assign() 新建了一个副本
			return Object.assign({},state,{
				HomeSlider:action.HomeSlider
			})
		case HOME.GET_MENU:
		// ...state是ES7提案对象展开运算符
			return {
				...state,
				HomeMenu:action.HomeMenu
			}
		case HOME.GET_VIDEO:
			return {
				...state,
				HomeVideo:action.HomeVideo
			}
		case HOME.GET_LIST:
			return {
				...state,
				HomeList:action.HomeList
			}
		case HOME.DMPTYDATA:
			// 清空所有数据,除了链接
			return {
				Link:state.Link,//这个不清空
				HomeSlider:[],
				HomeList:[],
				HomeMenu:[],
				HomeVideo:[]
			}
		default:
			// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
			return state;
	}
}
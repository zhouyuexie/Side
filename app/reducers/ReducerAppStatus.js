"use strict";

import {APPSTATUS} from "../action/ActionType";
import {AppInfo} from "../Configure";//导入主页数据

// 根据动作类型的返回值改变主页数据
export default function ReducerHome(state=AppInfo,action){
	switch(action.type){
		// case APPSTATUS.HOMEDATAREADY:
		// 	// 首页数据准备完成
		// 	// Object.assign是es6的方法,使用 Object.assign() 新建了一个副本
		// 	return Object.assign({},state,{
		// 		HomeDataReady:action.HomeDataReady,
		// 	})
		case APPSTATUS.ISFIRSTSTART:
			// 是否第一个启动
			return {
				...state,
				ISFIRSTSTART:action.ISFIRSTSTART
			}
		default:
			// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
			return state;
	}
}
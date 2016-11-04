"use strict";
// 这个是定义的动作,每个动作都是一个函数
// 调用动作来改变对应的数据
import Reactotron from 'reactotron-react-native';
import {APPSTATUS} from "./ActionType";
import {AppInfo} from "../Configure";//获取数据

// 改变app首页是否加载完成数据,每次进入首页后就再去掉
// export function ChangeHomeDataReady(status=true){
// 	return (dispatch) => {
// 		dispatch({"type":APPSTATUS.HOMEDATAREADY,HomeDataReady:status});
// 	}
// }
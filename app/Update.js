// 升级配置
import Reactotron from 'reactotron-react-native';//测试
import { GetHomeIndexData,EmptyHomeData } from './action/ActionHome';
import {ChangeHomeDataReady} from "./action/ActionAppStatus";

// 检查版本信息
function checkVersion(Link){
	return fetch(Link.HomeUpdate)
		.then((response)=>response.json())
		.then((res)=>{
			return res;//返回版本信息
		})
}

// 获取首页数据
export const GetHomeData =  (props)=>{
	// return new Promise((resolve,reject)=>{
		const {dispatch} = props;
		return dispatch(GetHomeIndexData());
		// resolve();
	// });
}

// 清空首页数据
export const PromiseEmptyHomeData =  (props)=>{
	return new Promise((resolve,reject)=>{
		const {dispatch} = props;
		dispatch(EmptyHomeData());
		resolve();
	});
}

// 根据传入的url获取数据然后返回(通用时间)
export const PromiseGetData = (Link)=>{
	return new Promise((resolve,reject)=>{
		fetch(Link, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}).then((response)=>response.json()).then((res)=>{
			resolve(res.Data);
		}).catch((e)=>{
			reject(e);
		});
	})
}

// 启动时候检查
// export default function Update(props,_Ready){
// 	const {HomeList,dispatch,Link} = props;

// 	// const Info = checkVersion(Link);//检查版本信息
// 	if(HomeList.length===0){
// 		dispatch(ChangeList())
// 	}
// 	// Reactotron.display(Info)
// 	// if(Info.Code!==2){
// 		// dispatch(EmptyList());//清空
// 	// }

// 	setTimeout(()=>{
// 		_Ready();//进入app页面
// 	},2000);
// }

// 刷新列表
// export function Refreshing(props,_Ready){
// 	const {dispatch} = props;
// 	dispatch(ChangeList());
// 	setTimeout(()=>{
// 		_Ready();//进入app页面
// 	},1000);
// }

// 刷新列表(异步)
// export const PromiseRefreshing =  (props)=>{
// 	return new Promise((resolve,reject)=>{
// 		const {dispatch} = props;
// 		dispatch(ChangeList());
// 		resolve();
// 	});
// }
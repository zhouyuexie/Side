
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	ScrollView,
	LayoutAnimation,
	Animated,
	PanResponder,
	ListView
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {PromiseGetData} from "../Update";

import Picture from "../components/Picture";//全是图片
import Post from "../components/Post"//资讯,没有图
import PictureArticle from "../components/PictureArticle";//图文信息
import PostDetail from "../page/PostDetail";//帖子详情页
import {jumpUseName} from "../components/RouteStack";


class HomeShow extends Component {
	static get defaultProps(){
		return {
			
		}
	}
	state={
		Content:"",
	}
	render(){
		let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		// ds放这里定义,刷新列表才有效,否则看不到效果
		return(
			<View style={styles.container}>
				<ListView
					pageSize={2}
					onEndReachedThreshold={100}
					contentContainerStyle={styles.lists}
					dataSource={ds.cloneWithRows(this.props.HomeList)}
					renderRow={(rowData)=> this._renderPost(rowData)}
					/>
				{
					// this.props.HomeList.map((data)=>{
					// 	return this._renderPost(data);
					// })
				}
			</View>
		)
	}
	_renderPost(data){
		// const { RootNavigator } = this.props;
		let Avatar = data.Avatar;
		let way = this.ShowWay(data);
		if(Avatar===null){
			return way.one;
		}
		else{
			let dataArray = data.Avatar.split(",");
			switch(dataArray.length){
				case 1:
					return way.three;//只有一个图片,是图文
				default:
					return way.two;//全是图片
			}
		}
	}
	ShowWay(data){
		const { RootNavigator } = this.props;
		return {
			one:(
				<TouchableOpacity
					activeOpacity={1}
					key={"0"+data.Id}
					onPress={()=>{this._onPress(data.Url,data.Title)}}>
					<Post RootNavigator={RootNavigator} key={"11"+data.Id} {...data} />
				</TouchableOpacity>
			),
			two:(
				<Picture RootNavigator={RootNavigator} key={"22"+data.Id} {...data}/>
			),
			three:(
				<TouchableOpacity
					activeOpacity={1}
					key={"3"+data.Id}
					onPress={()=>{this._onPress(data.Url,data.Title)}}>
					<PictureArticle RootNavigator={RootNavigator} key={"33"+data.Id} {...data} />
				</TouchableOpacity>
			)
		}
	}
	_onPress(Url,Title){
		const { RootNavigator } = this.props;
		// 跳过去
		jumpUseName(RootNavigator,"WebPage",{url:Url,title:Title,isWeb:false});
	}
	componentWillMount(){

	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container:{

	}
});

function select(store){
	return {
		HomeList:store.homeStore.HomeList,
	}
}

export default connect(select)(HomeShow);
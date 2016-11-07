
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
	PanResponder
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
		
	}
	render(){
		return(
			<View style={styles.container}>
				{this.props.HomeList.map((data)=>{
					return this._renderPost(data);
				})}
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
		return {
			one:(
				<TouchableOpacity
					key={"1"+data.Id}
					activeOpacity={1}
					onPress={()=>{this._onPress(data.Url,data.Title)}}>
					<Post key={"11"+data.Id} {...data} />
				</TouchableOpacity>
			),
			two:(
				<TouchableOpacity
					activeOpacity={1}
					key={"2"+data.Id}
					onPress={()=>{this._onPress(data.Url,data.Title)}}>
					<Picture key={"22"+data.Id} {...data}/>
				</TouchableOpacity>
			),
			three:(
				<TouchableOpacity
					activeOpacity={1}
					key={"3"+data.Id}
					onPress={()=>{this._onPress(data.Url,data.Title)}}>
					<PictureArticle key={"33"+data.Id} {...data} />
				</TouchableOpacity>
			)
		}
	}
	_onPress(Url,Title){
		const { RootNavigator } = this.props;
		// 获取文章数据跳过去
		PromiseGetData(Url).then((data)=>{
			jumpUseName(RootNavigator,"PostDetail",{source:data.Content,title:Title,isWeb:false});
			// jumpUseName(RootNavigator,"WebPage",{source:data.Content,title:Title,isWeb:false});
		}).catch((e)=>{
			// 记录错误
			Reactotron.log("HomeShow:"+e)
		});
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
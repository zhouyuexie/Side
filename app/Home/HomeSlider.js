import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";
import {PromiseGetData} from "../Update";

class HomeSlider extends Component{
	//定义属性类型
	propTypes:{

	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<Swiper style={styles.container} height={170} autoplay={true}>
				{this.props.HomeSlider.map((data)=>{
					return this._renderImage(data);
				})}
			</Swiper>
		)
	}
	_renderImage(data){
		return (
			<TouchableOpacity
				key={"HomeSilder"+data.Id}
				style={styles.slider}
				onPress={()=>{this._onPress(data.ReqType,data.Url,data.Title,data.IsDirect)}}
				activeOpacity={1}>
				<Image style={styles.img} source={{uri:data.PUrl}} />
			</TouchableOpacity>
		)
	}
	_onPress(reqType,url,title,isDirect){
		// reqType是true的时候需要用原生界面打开url界面,否则用网页打开
		const { RootNavigator } = this.props;
		if(reqType){
			let page = JSON.parse(url);
			jumpUseName(RootNavigator,page.pageName,page.message);
		}
		else{
			// 文章有些事存储到后台服务器,需要获取html格式数据然后用webview展示,而另一种是需要用webview打开的网页链接url
			if(isDirect){
				// 网页链接
				jumpUseName(RootNavigator,"WebPage",{source:url,title:title,isWeb:true});
			}
			else{
				// 获取文章数据跳过去
				PromiseGetData(url).then((data)=>{
					jumpUseName(RootNavigator,"WebPage",{source:data.Content,title:title,isWeb:false});
				}).catch((e)=>{
					// 记录错误
				});
			}
			
		}
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flexDirection:"row",
	},
	slider:{
		justifyContent:"center",
		alignItems:"center",
		height:170
	},
	img:{
  	width:Width,
  	height:170,
  	resizeMode:"cover"
  }
});

function select(store){
	return {
		HomeSlider:store.homeStore.HomeSlider,
	}
}

export default connect(select)(HomeSlider);
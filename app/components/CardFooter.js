import React, {Component,PropTypes} from 'react';
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
	Animated
} from 'react-native';
import {Width,Height,Scale} from "./DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CardFooter extends Component {
	propTypes:{
		name:PropTypes.string.isRequired,
		time:PropTypes.string,
		comment:PropTypes.string,
		isPost:PropTypes.bool
	}
	static get defaultProps(){
		return {
			isPost:false,//默认不是帖子,也就是板块
		}
	}
	state = {
		time:""
	}
	render(){
		if(this.props.isPost){
			return this._renderPost();
		}
		else{
			return this._renderPlate();
		}
	}
	_renderPost(){
		// 帖子
		return (
			<View style={styles.container}>
				<Text style={styles.left}>{this.props.name}</Text>
				<View style={styles.right}>
					<View style={styles.rightbody}>
						<Icon name="clock-o" size={18} color="#A4A4A4" />
						<Text style={styles.text}>{this.state.time}</Text>
					</View>
					<View style={styles.rightbody}>
						<Icon name="eye" size={16} color="#A4A4A4" />
						<Text style={styles.text}>{this.props.readnumber}</Text>
					</View>
					<View style={styles.rightbody}>
						<Icon name="commenting-o" size={16} color="#A4A4A4" />
						<Text style={styles.text}>{this.props.comment}</Text>
					</View>
				</View>
			</View>
		)
	}
	_renderPlate(){
		return (
			<View style={styles.container}>
				<Text style={styles.plate}>{this.props.name}</Text>
			</View>
		)
	}
	formatTime(time){
		const old = new Date(this.props.time);
		const now = Date.now();
		let diffMinute = Math.floor((now - old)/1000/60);//相差的分钟数
		if(diffMinute<60){
			this.state.time = diffMinute + "分钟之前";
		}
		else{
			let diffHour = Math.floor((now - old)/1000/60/60);//相差的小时数
			if(diffHour<24){
				// 小于24小时
				// let diffHourMinute = Math.floor((now - old)/1000/60%60);//相差的分钟数
				this.state.time = diffHour + "小时之前";
			}
			else{
				let diffDay = Math.floor(diffHour/24);//相差的天数
				if(diffDay<30){
					this.state.time = diffDay + "天之前";
				}
				else{
					let diffMonth = Math.floor(diffDay/30);//相差的月数
					if(diffMonth<12){
						this.state.time = diffDay + "个月之前";
					}
					else{
						this.state.time = diffDay + "年之前";
					}
				}
			}
		}
	}
	componentWillMount(){
		// 准备格式化时间
		this.formatTime(this.props.time);
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection:"row",
	},
	left:{
		flex:1,
		fontSize:12,
		color:"#A4A4A4",
	},
	right:{
		flexDirection:"row",
		alignItems:"center"
	},
	rightbody:{
		flexDirection:"row",
		alignItems:"center",
		marginLeft:10,
		marginRight:10
	},
	text:{
		fontSize:12,
		color:"#A4A4A4",
		marginLeft:2
	},
	plate:{
		fontSize:14,
		color:"#666"
	}
});
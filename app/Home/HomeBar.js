
import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity,
	Platform,
	LayoutAnimation
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import {jumpUseName} from "../components/RouteStack";//路由栈
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeBar extends Component {	
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
			<View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} style={styles.align}>
          <Image source={require('../assest/icon_1_self.png')} style={styles.image} />
          <Text style={styles.text}>车票预订</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.align}>
          <Image source={require('../assest/icon_2_self.png')} style={styles.image} />
          <Text style={styles.text}>车票预订</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.align}>
        	<Image source={require('../assest/icon_3_self.png')} style={styles.image} />
          <Text style={styles.text}>车票预订</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.align}>
          <Image source={require('../assest/icon_4_self.png')} style={styles.image} />
          <Text style={styles.text}>车票预订</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.align}>
          <Image source={require('../assest/icon_5_self.png')} style={styles.image} />
          <Text style={styles.text}>车票预订</Text>
        </TouchableOpacity>
    </View>
		)
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
}

const styles = StyleSheet.create({
	container:{
		width:Width,
    height:110,
    flexDirection:'row',
    justifyContent: "space-around",
    alignItems:"center",
    backgroundColor: "#FFF", 
    marginTop:10,
	},
	align:{
		alignItems:"center",
		justifyContent:"center",
	},
	image:{
		width:45,
		height:45,
		marginBottom:5,
		resizeMode: "contain",
	},
	text:{
		fontSize:14,
		color:"#555",
	}
});

export default HomeBar;
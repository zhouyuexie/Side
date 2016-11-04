import React, {Component,PropTypes} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	ScrollView,
	PixelRatio,
	StatusBar,
	TouchableOpacity,
	Platform,
	Alert
} from 'react-native';
import {Width,Height,Scale} from "../components/DeviceInfo";//获取设备信息
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeSearch extends Component {
	//定义属性类型
	propTypes:{

	}
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.8} style={styles.mapMarker}>
				<Icon name="map-marker" size={32} color="#fff" />
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.8} style={styles.search}>
				<Icon name="search" size={18} color="#fff" style={styles.searchIcon} />
				<Text style={styles.text}></Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.8} style={styles.commenting}>
				<Icon name="commenting-o" size={26} color="#fff" />
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
		height:55,
		flexDirection:'row',
		justifyContent: "space-between",
		alignItems:"center",
		backgroundColor: "#41A2FF", 
		// ...Platform.select({
		//   ios:{
		//     height:55,
		//     paddingTop:10
		//   },
		//   android:{
		//     height:60,
		//     paddingTop:20
		//   }
		// }),
		position:"absolute",
		top:0,
		left:0,
		zIndex:10
	},
	mapMarker:{
		marginLeft:10,  
	},
	search:{
		width:220,
		height:28,  
		flexDirection:'row',
		alignItems:"center",
		borderRadius:10,
		borderWidth:1,
		borderColor:"#fff",
	},
	searchIcon:{
		marginLeft:10,
	},
	text:{
		marginLeft:5,
		fontSize:13,
	},
	commenting:{
		marginRight:10,  
	}
})

export default HomeSearch;
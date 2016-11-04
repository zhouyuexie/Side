// 配置文件,保存app的各种配置和初始化各种数据
// 如果需要更新,只需要从服务器获取数据更改state中的信息
// 每次更新app的时候需要更新下列的信息

// app各种信息
export const AppInfo = {
	Version:"0.0.1",
	Author:"yyhp",
	IsFirstStart:true,
	HomeDataReady:false,//首页数据是否准备完成
	AppStartImg:[],// app启动图
}

// Home页面
export const Home = {
	// 链接
	Link:{
		HomeIndex:"http://192.168.31.86/api/Home/Index",//app获取首页数据
	},
	HomeSlider:[],// 轮播图
	HomeMenu:[],// 菜单栏
	HomeVideo:[],//视频
	HomeList:[],//列表
}

// Seller页面
export const Seller= {
	Seller:""
}

// 用户信息,初始化都是为空
export const UserData = {
	user:{
		Phone:"",
		Name:"",
		Password:"",
		Money:"",
		Age:""
	},
	isLogin:false,//是否登录
	status:null//用户当前状态(比如手机号短信验证)
}
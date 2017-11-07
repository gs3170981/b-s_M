/*tips: ------------------------------------------------------
	path: 即是获取的路由亦是加载的js文件目录,目录默认挂载在main下
	name: 这个没啥用,用于找模块维护方便
	{
		path的名称除了首页/，其余的必须遵循以下条件才能正确引入
			1、index.js文件下有正确的路由点击路径
			2、main下必须要有相同名称的JS
			3、JS内部必须用闭包的形式以该名称命名
	}
----------------------------------------------------------GS*/
Router.route({
	path: '/',
	name: '首页',
})
Router.route({
	path: '/Integrated_M',
	name: '综合管理',
})
Router.route({
	path: '/Maintenance_M',
	name: '维护管理',
})
Router.route({
	path: '/ServiceSupport',
	name: '服务支撑',
})
Router.route({
	path: '/Operation_A',
	name: '运营分析',
})
Router.route({
	path: '/Order_M',
	name: '工单管理',
})
Router.route({
	path: '/System_M',
	name: '系统管理',
})


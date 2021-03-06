//左侧菜单路由
var Routers = [
	{
		type: 'blockMenu',
		name: 'H5区块目录',
		icon: 'fa fa-bars',
		child: [{
				router: 'blockMenuCheck',
				name: '目录维护',
				path: '/components/blockMenu/blockMenuCheck',
			}
		]
	},
	{
		type: 'block',
		name: 'H5区块模板',
		icon: 'fa fa-html5',
		child: [{
				router: 'blockDefine',
				name: '区块定义',
				path: '/components/block/blockDefine',
			},
			{
				router: 'blockView',
				name: '区块效果预览',
				path: '/components/block/blockView',
			}
		]
	},
	{
		type: 'channel',
		name: '频道管理',
		icon: 'fa fa-sitemap',
		child: [{
				router: 'channelCheck',
				name: '频道查询',
				path: '/components/channel/channelCheck',
			}
		]
	},
	{
		type: 'activity',
		name: '活动管理',
		icon: 'fa fa-star',
		child: [{
				router: 'activityAdmin',
				name: '活动管理',
				path: '/components/activity/activityAdmin',
			},
			{
				router: 'activityTemplate',
				name: '活动模板',
				path: '/components/activity/activityTemplate',
			},
			{
				router: 'activityFill',
				name: '活动区块添加',
				path: '/components/activity/activityFill',
			},
			{
				router: 'activityApprove',
				name: '活动审批',
				path: '/components/activity/activityApprove',
			},
			{
				router: 'activityMsg',
				name: '活动信息',
				path: '/components/activity/activityMsg',
			},
			{
				router: 'activityView',
				name: '活动效果预览',
				path: '/components/activity/activityView',
			}
		]
	},
	{
		type: 'filter',
		name: '分发过滤',
		icon: 'fa fa-filter',
		child: [{
				router: 'white',
				name: '活动白名单',
				path: '/components/filter/white',
			},
			{
				router: 'black',
				name: '活动黑名单',
				path: '/components/filter/black',
			}
		]
	},
	{
		type: 'account',
		name: '企业账户',
		icon: 'fa fa-credit-card-alt',
		child: [{
				router: 'accountMsg',
				name: '企业基本信息',
				path: '/components/account/accountMsg',
			},
			{
				router: 'accountAddMoney',
				name: '企业账户充值',
				path: '/components/account/accountAddMoney',
			}
		]
	},
	{
		type: 'userAdmin',
		name: '用户管理',
		icon: 'fa fa-user',
		child: [{
				router: 'departmentAdmin',
				name: '部门管理',
				path: '/components/userAdmin/departmentAdmin',
			},
			{
				router: 'roleAdmin',
				name: '角色管理',
				path: '/components/userAdmin/roleAdmin',
			},
			{
				router: 'usersAdmin',
				name: '用户管理',
				path: '/components/userAdmin/usersAdmin',
			}
		]
	},
	{
		type: 'count',
		name: '活动跟踪',
		icon: 'fa fa-line-chart',
		child: [{
				router: 'time',
				name: '活动时间分析',
				path: '/components/count/time',
			},
			{
				router: 'place',
				name: '活动地点分析',
				path: '/components/count/place',
			},
			{
				router: 'people',
				name: '活动人群分析',
				path: '/components/count/people',
			}
		]
	},
	{
		type: 'seller',
		name: '商家管理',
		icon: 'fa fa-users',
		child: [{
				router: 'msgSeller',
				name: '商家信息',
				path: '/components/seller/msgSeller',
			}
		]
	},
	{
		type: 'other',
		name: '其他',
		icon: 'fa fa-cubes',
		child: [{
				router: '404',
				name: '404页面',
				path: '/components/404',
			},
			{
				router: 'login',
				name: '登录页面',
				path: '/login',
			}
		]
	}
]

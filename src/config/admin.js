export default [{
    id:0,
    name:'关于我们',
    checkAll:false,//是否全选
    all:false,//全选按钮是否显示半选
    checkedRole:[],//选中的数值
    roleArr:["公司简介",'企业文化','组织架构'],
    children:[{
        path: '/companyFile',
        component: "companyFile",
        name:"公司简介"
    },{
        path: '/culture',
        component: "culture",
        name: '企业文化',
    },{
        path: '/chart',
        component: "chart",
        name:'组织架构',
    }]
},{
    id:1,
    name:'权限管理',
    all:false,
    checkAll:false,
    checkedRole:[],
    roleArr:['管理员列表'],
    children:[{
        path:'/listAdmin',
        component: "adminList",
        name: '管理员列表',
    }]
}]
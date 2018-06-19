export default [{
    id:0,
    name:'关于我们',
    checkAll:false,//是否全选
    all:false,//全选按钮是否显示半选
    checkedRole:[],//选中的数值
    roleArr:[2,3,4],
    children:[{
        id:2,
        name:"公司简介"
    },{
        id:3,
        name: '企业文化',
    },{
        id:4,
        name:'组织架构',
    }]
},{
    id:1,
    name:'权限管理',
    all:false,
    checkAll:false,
    checkedRole:[],
    roleArr:[5],
    children:[{
        id:5,
        name: '管理员列表',
    }]
}]
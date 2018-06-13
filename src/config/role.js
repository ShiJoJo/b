export default { 
    companyFile:{
        path:'/companyFile',
        component:(r)=>require(['@/page/companyFile'],r),
        meta: ['关于我们', '公司简介'],
    },
    culture:{
        path:'/culture',
        component:(r)=>require(['@/page/culture'],r),
        meta: ['关于我们', '企业文化'],
    },
    chart:{
        path:'/chart',
        component:(r)=>require(['@/page/chart'],r),
        meta: ['关于我们', '组织架构'],
    },
    adminList:{
        path:'/listAdmin',
        component:(r)=>require(['@/page/admin/adminList'],r),
        meta: ['管理员管理', '管理员列表'],
        children:[{
            path:'editAdmin',
            component: (r)=>require(['@/page/admin/admin'],r),
            meta: ['权限管理', '管理员列表','修改管理员权限'],
        },{
            path:'addAdmin',
            component: (r)=>require(['@/page/admin/admin'],r),
            meta: ['权限管理', '管理员列表','新增管理员权限'],
        }]
    }
}
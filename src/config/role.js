export default { 
    companyFile:{
        path:'/companyFile',
        name:'companyFile',
        component:r => require.ensure([], () => r(require('../page/companyFile')), 'companyFile'),
        meta: ['关于我们', '公司简介'],
    },
    culture:{
        path:'/culture',
        name:'culture',
        component:r => require.ensure([], () => r(require('../page/culture')), 'culture'),
        meta: ['关于我们', '企业文化'],
    },
    chart:{
        path:'/chart',
        name:'chart',
        component:r => require.ensure([], () => r(require('../page/chart')), 'chart'),
        meta: ['关于我们', '组织架构'],
    },
    adminList:{
        path:'/listAdmin',
        name:'listAdmin',
        component:r => require.ensure([], () => r(require('@/page/admin/adminList')), 'adminList'),
        meta: ['管理员管理', '管理员列表'],
        children:[{
            path:'editAdmin',
            name:'editAdmin',
            component: r => require.ensure([], () => r(require('@/page/admin/admin')), 'admin'),
            meta: ['权限管理', '管理员列表','修改管理员权限'],
        },{
            path:'addAdmin',
            name:'addAdmin',
            component: r => require.ensure([], () => r(require('@/page/admin/admin')), 'admin'),
            meta: ['权限管理', '管理员列表','新增管理员权限'],
        }]
    }
}
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../page/login')), 'login');
const admin = r => require.ensure([], () => r(require('../page/admin')), 'admin');
const components = r => require.ensure([], () => r(require('../page/component')), 'component');
const companyFile = r => require.ensure([], () => r(require('../page/companyFile')), 'companyFile');
const culture = r => require.ensure([], () => r(require('../page/culture')), 'culture');
const chart = r => require.ensure([], () => r(require('../page/chart')), 'chart');
const course = r => require.ensure([], () => r(require('../page/course')), 'course');
export default [
    {
      path: '/login',
      component: login
    },{
      path:'/admin',
      component: admin
    },{
      path:'',
      component:components,
      children:[{
        path: '/companyFile',
        component: companyFile,
        meta: ['关于我们', '公司简介'],
      },{
        path: '/culture',
        component: culture,
        meta: ['关于我们', '企业文化'],
      },{
        path: '/chart',
        component: chart,
        meta: ['关于我们', '组织架构'],
      },{
        path: '/course',
        component: course,
        meta: ['关于我们', '发展历程'],
      }]
    }
]

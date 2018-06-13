import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../page/login')), 'login');
const waring = r => require.ensure([], () => r(require('../page/404Code')), 'waring');
/* const admin = r => require.ensure([], () => r(require('../page/admin/adminList')), 'admin');
const components = r => require.ensure([], () => r(require('../components/component')), 'component');
const companyFile = r => require.ensure([], () => r(require('../page/companyFile')), 'companyFile');
const culture = r => require.ensure([], () => r(require('../page/culture')), 'culture');
const chart = r => require.ensure([], () => r(require('../page/chart')), 'chart');
const course = r => require.ensure([], () => r(require('../page/course')), 'course'); */
export default [
    {
      path: '/login',
      component: login
    },{
      path: '/404',
      component: waring
    }/* ,{
      path:'',
      redirect: '/companyFile',
      component:components,
      children:[ {
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
        path: '/adminList',
        component: admin,
        meta: ['关于我们', '发展历程'],
      },
    ]} */
]

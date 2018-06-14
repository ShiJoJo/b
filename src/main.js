// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import VueRouter from 'vue-router';
import routes from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {setCookie,getCookie} from './config/cookie';
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;
const router = new VueRouter({
	routes,
	// mode:"history",
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})
router.beforeEach( (to, from, next) => {
	if (store.getters.token) {
		if(to.path === '/login'){
			next({ path: '/' });
		}else{
			if(store.getters.role){
				store.dispatch('getUserInfo').then(response=>{
					let role = response;
					store.dispatch("elSildeRole",role).then((roleRoute)=>{
						console.log(roleRoute)
						router.addRoutes(roleRoute);
						next({path:to.path});
					})
				}).catch((err) => {
					store.dispatch('layoutOut').then(() => {
						Message.error(err || 'Verification failed, please login again')
						next({ path: '/login' });
					})
				})
			}else{
				next();			
			}
		}
	}else{
		if(to.path === '/login'){
			next();
		}else{
			next({ path: '/login' });
		}
	}
} )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import axios from 'axios'
import qs from 'qs'
import { Loading, Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000;
// http请求拦截器
axios.interceptors.request.use(config => {
 // element ui Loading方法
    return config
}, error => {
 Message.error({
    message: '加载超时'
 })
 return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
 return data.data
}, error => {
    Message.error({
        message: '加载失败'
    })
 return Promise.reject(error)
})
const $ajax = (url, data, type)=>{
	// url= baseUrl+url;
	if(type.toUpperCase()=="GET"){
		const params = data;
		return  axios({
			url: url,
			method: type,
			params
		})
	}else{
		data = qs.stringify(data);
		return  axios({
			url: url,
			method: type,
			data
		})
	}	      
}
export const getAdminRole = data => $ajax('/admin/role', data, 'POST');
export const login = data => $ajax('/admin/login', data, 'POST');
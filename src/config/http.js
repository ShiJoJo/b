import axios from 'axios'
import store from '../store/index'
import { Loading, Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000;
// http请求拦截器
var loadinginstace;
const token = store.state.token;
axios.interceptors.request.use(config => {
 // element ui Loading方法
    if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers.Authorization = token;
    }
    loadinginstace = Loading.service({ fullscreen: true })
    return config
}, error => {
 loadinginstace.close()
 Message.error({
    message: '加载超时'
 })
 return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
 loadinginstace.close()
 return data.data
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载失败'
    })
 return Promise.reject(error)
})
 
export default axios
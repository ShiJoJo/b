import { getAdminRole,loginOut } from '@/api/login'
import { getCookie,setCookie } from "@/config/cookie"
var tokenName = "Admin_Token";
const user = {
    state:{
        token:getCookie(tokenName),
        role:[],
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token;
        },
        SET_ROLE:(state,role)=>{
            state.role = role;
        }
    },
    actions:{
        getUserInfo({commit,state}){
            return new Promise((resolve,reject)=>{
                getAdminRole(state.token).then(response=>{
                    resolve(response);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        setToken({commit,state},token){
            return new Promise(resolve=>{
                setCookie(tokenName,token);
                commit('SET_TOKEN',token);
                resolve();
            })
        },
        elSildeRole({commit},role){
            return new Promise(resolve=>{
                let roleArr = []
                Object.keys(role).forEach(keys=>{
                    if(role[keys]["children"]){
                        Object.keys(role[keys]["children"]).forEach(items=>{
                            roleArr.push({
                                path:role[keys]["children"][items].path,
                                component:(resolve)=>require(['@/page'+role[keys]["children"][items].filePath+role[keys]["children"][items].component+''],resolve),
                                meta: role[keys]["children"][items].meta
                            })
                        })
                    }else{
                        roleArr.push({
                            path:role[keys].path,
                            component:(resolve)=>require(['@/page'+role[keys].filePath+role[keys].component+''],resolve),
                            meta: role[keys].meta
                        })
                    }
                })
                const roleRoute=[{
                    path:'',
                    redirect: '/companyFile',
                    component: (resolve)=>require(['@/components/component'],resolve), 
                    children:roleArr
                },{
                    path:"*",
                    component:(resolve)=>require(['@/page/404Code'],resolve),
                }]
                commit('SET_ROLE',role);
                resolve(roleRoute);
            })
        },
        layoutOut({commit,state}){
            return new Promise((resolve,reject)=>{
                loginOut(state.token).then(response=>{
                    commit("SET_TOKEN","");
                    commit("SET_ROLE",[]);
                    setCookie(tokenName,"")
                    resolve(response);
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user











import { getAdminMenu,getAdminRole,loginOut } from '@/api/login'
import { getCookie,setCookie } from "@/config/cookie"
var tokenName = "Admin_Token";
const user = {
    state:{
        token:getCookie(tokenName),
        role:true,
        menu:[]
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token;
        },
        SET_ROLE:(state,role)=>{
            state.role = role;
        },
        SET_MENU:(state,menu)=>{
            state.menu = menu;
        }
    },
    actions:{
        setToken({commit},token){
            return new Promise(resolve=>{
                setCookie(tokenName,token);
                commit('SET_TOKEN',token);
                resolve();
            })
        },
        elSildeRole({commit},role){
            return new Promise(resolve=>{
                let roleArr = [],roleChild;
                Object.keys(role).forEach(keys=>{
                    roleChild={
                        path:role[keys].path,
                        component:(r)=>require(['@/page'+role[keys].filePath+role[keys].component],r),
                        meta: role[keys].meta
                    }
                    /* if(role[keys].children){
                        let childrenDetail=[];
                        Object.keys(role[keys].children).forEach(cNum=>{
                            childrenDetail.push
                        })
                    } */
                })
                const roleRoute=[{
                    path:'',
                    redirect: '/companyFile',
                    component: (r)=>require(['@/components/component'],r), 
                    children:roleArr
                },{
                    path:"*",
                    component:(r)=>require(['@/page/404Code'],r),
                }]
                commit('SET_ROLE',false);
                resolve(roleRoute);
            })
        },
        layoutOut({commit,state}){
            return new Promise((resolve,reject)=>{
                loginOut(state.token).then(response=>{
                    commit("SET_TOKEN","");
                    setCookie(tokenName,"")
                    resolve(response);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        elSildeMenu({commit,state}){
            return new Promise((resolve,reject)=>{
                getAdminMenu(state.token).then(response=>{
                    commit("SET_MENU",response);
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    },
    getters:{        
        getUserInfo:state=>{
            return new Promise((resolve,reject)=>{
                getAdminRole(state.token).then(response=>{
                    resolve(response);
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default user











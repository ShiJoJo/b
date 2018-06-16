import { getAdminMenu,getAdminRole,loginOut } from '@/api/login'
import { getCookie,setCookie } from "@/config/cookie"
import roleRouter from "@/config/role"
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
                let roleArr = [];
                Object.keys(role).forEach(keys=>{
                    Object.keys(role[keys].children).forEach(cNum=>{
                        roleArr.push(roleRouter[role[keys]['children'][cNum]['component']]);
                    })
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
        getUserInfo({commit,state}){
            return new Promise((resolve,reject)=>{
                getAdminMenu(state.token).then(response=>{
                    commit("SET_MENU",response);
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    },
}

export default user











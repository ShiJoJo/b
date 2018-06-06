import { getAdminRole } from "@/api/getDate";
import { getCookie } from "@/config/cookie";

const user = {
    state:{
        token:getCookie(),
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
        getRole({commit,state})
    }
}













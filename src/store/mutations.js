import {SET_TOKEN,
    GET_TOKEN
} from './mutation-types.js'










export default {
    [SET_TOKEN](state){
        state.token = 1;
    },
    [GET_TOKEN](state){
        state.token = 0;
    }
}
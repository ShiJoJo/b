import {
	SET_TOKEN,
	GET_TOKEN
} from './mutation-types.js'










export default {
    setToken({
        commit,
        state
    }){
        commit(SET_TOKEN)
    },
    getToken({
        commit,
        state
    }){
        commit(GET_TOKEN)
    }
}
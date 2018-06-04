import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import {getCookie} from '../config/cookie'
const tokenId = 'Admin_Token'
Vue.use(Vuex)
const state = {
    token:getCookie(tokenId)
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
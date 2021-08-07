import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AuthService from '../services/AuthService'

let api_endpoint = process.env.VUE_APP_ENDPOINT || "http://localhost:3003"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: []
    },
    getters:{
        qs: (state) => state.data
    },
    mutations: {
        fetch(state, {res} ){
            state.data = res.data
        }
    },
    actions: {
        async fetchQ ({ commit }, path) {
            let url = `${api_endpoint}/${path}s`
            let headers = AuthService.getApiHeader()
            let res = await axios.get(url, headers)
            commit('fetch', {res} )
        }
    },
    modules: {
    }
})

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

let api_endpoint = process.env.VUE_APP_ENDPOINT || "http://localhost:3031"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: []
  },
  getters:{
      rewards: (state) => state.data
  },
  mutations: {
      fetch(state, {res} ){
        state.data = res.data
      },
      add(state, payload){
        state.data.push(payload)
      },
      edit(state, data){
        state.data = data
      }
  },
  actions: {
      async fetchReward({commit}){
        let res = await axios.get(api_endpoint+"/rewards")
        commit('fetch', {res})
      },
      
  },
  modules: {
  }
})

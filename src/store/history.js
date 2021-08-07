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
      histories: (state) => state.data
  },
  mutations: {
  },
  actions: {
      async addHistory({commit}, payload1){
          let url = `${api_endpoint}/histories`
          let body = {
              "date": payload1.date,
              "heading" : payload1.heading,
              "point" : payload1.point,
              "type": payload1.type,
              "user": [payload1.id]
          }
          let headers = AuthService.getApiHeader()
          await axios.post(url, body, headers)
      }
  },
  modules: {
  }
})

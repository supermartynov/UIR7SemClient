import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  getters: {
    GET_USER_NAME: (state) => {
      return state.username;
    }
  },
  mutations: {
    SET_USER_NAME : (state, payload) => {
      state.username = payload;
    }
  }
})

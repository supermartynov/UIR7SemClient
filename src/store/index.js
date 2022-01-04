import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: ''
  },
  getters: {
    GET_USER_EMAIL: (state) => {
      return state.email;
    }
  },
  mutations: {
    SET_USER_EMAIL : (state, payload) => {
      state.email = payload;
    }
  }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './polyfill'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import createPersistedState from "vuex-persistedstate";
import App from './App'
import router from './router/index'
import store from './store/index.js'


// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  plugins: [createPersistedState()],
  template: '<App/>',
  components: {
    App
  }
})

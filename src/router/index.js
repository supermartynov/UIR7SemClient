import Vue from 'vue'
import Router from 'vue-router'
import Registration from "@/components/auth/Registration";
import Authorization from "@/components/auth/Authorization";

// Containers
const DefaultContainer = () => import('@/components/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/components/views/Dashboard')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
      ]
    },
    {
      path: '/registration',
      name: 'Register',
      component: Registration
    },
    {
      path: '/authorization',
      name: 'Authorization',
      component: Authorization
    }
  ]
})

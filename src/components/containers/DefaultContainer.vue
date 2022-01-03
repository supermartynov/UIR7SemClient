<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/icons8-database-50.png" width="40" height="40" alt="SQL learner">
        <img class="navbar-brand-minimized" src="img/brand/icons8-database-50.png" width="30" height="30" alt="SQL">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none  mr-md-2">
        <b-nav-item class="d-md-down-none">
            <ProjectHeader/>
        </b-nav-item>
      </b-navbar-nav>
    </AppHeader>

    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader> Обучение</SidebarHeader>
        <SidebarForm/>
        <SidebarNav :navItems="navItems"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>

    <TheFooter>
      Учи бд
      <b-button varian="primary" @click="check">Кнопка</b-button>
      <router-link to="/registration"><b-button varian="primary">Кнопка2</b-button></router-link>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdown from '../headers/DefaultHeaderDropdown'
import DefaultHeaderDropdownAccnt from "@/components/headers/DefaultHeaderDropdownAccnt";
import ProjectHeader from "@/components/headers/ProjectHeader";
import axios from "axios";

export default {
  name: 'DefaultContainer',
  components: {
    ProjectHeader,
    DefaultHeaderDropdownAccnt,
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdown,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      navItems: nav.items,
      userName: null
    }
  },
  methods: {
    check() {
      axios.get("http://localhost:9000/dashboard")
      .then(res =>
      {
        console.log(res)
      })
    }
  },
  created() {

  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>

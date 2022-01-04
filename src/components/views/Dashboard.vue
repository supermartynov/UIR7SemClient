<template>
  <div class="animated fadeIn">
    <div id="Dashboard" v-if="this.$store.getters.GET_USER_EMAIL" class="text-center">
      Добро пожаловать, {{ this.$store.getters.GET_USER_EMAIL }} !
      <router-view/>
    </div>
    <div class="text-center" v-else>
      <UnauthorizedUserDashboard/>
    </div>
  </div>
</template>

<script>
import UnauthorizedUserDashboard from "@/components/views/UnauthorizedUserDashboard";
export default {
  name: 'dashboard',
  components: {UnauthorizedUserDashboard}
}
</script>

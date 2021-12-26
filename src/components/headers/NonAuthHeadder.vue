<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Аккаунт</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-bell-o" />
        <router-link to="authorization">Войти в личный кабинет</router-link>
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-envelope-o" />
       <router-link to="registration">Зарегестрироваться</router-link>
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import {HeaderDropdown as AppHeaderDropdown} from "@coreui/vue";

export default {
name: "NonAuthHeadder",
components: {
  AppHeaderDropdown
}
}
</script>

<style scoped>

</style>

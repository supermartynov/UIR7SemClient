<template>
<AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="/img/avatars/user.jpg"
        width="40"
        height="40"
        class="img-avatar"
        alt="user" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Аккаунт</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-bell-o" />
        Личный кабинет
      </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-envelope-o" />
        Сообщения
      </b-dropdown-item>
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Settings</strong>
      </b-dropdown-header>
      <b-dropdown-item><i class="fa fa-wrench" />
        Настройки аккаунта
      </b-dropdown-item>
      <b-dropdown-item @click="goToLoginPage"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import NonAuthHeadder from "@/components/headers/NonAuthHeadder";
import axios from "../../customAxios";
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    NonAuthHeadder,
    AppHeaderDropdown
  },
  data: () => {
    return {

    }
  },
  methods: {
    goToLoginPage: function() {
      axios.get("/logout")
      .then(this.$store.commit("SET_USER_EMAIL", null))
    }
  },
}
</script>

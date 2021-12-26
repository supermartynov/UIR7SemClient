<template>
  <div class="animated fadeIn">
    <div id="Dashboard">
      Добро пожаловать, {{this.$store.getters.GET_USER_NAME}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

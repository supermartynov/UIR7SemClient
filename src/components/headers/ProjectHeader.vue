<template>
  <div>
    <NonAuthHeadder v-if="!this.$store.getters.GET_USER_NAME"/>
    <DefaultHeaderDropdownAccnt v-if="$store.getters.GET_USER_NAME"/>
  </div>
</template>

<script>
import NonAuthHeadder from "@/components/headers/NonAuthHeadder";
import DefaultHeaderDropdownAccnt from "@/components/headers/DefaultHeaderDropdownAccnt";
export default {
  name: "ProjectHeader",
  components: {
    DefaultHeaderDropdownAccnt,
    NonAuthHeadder
  }
}
</script>

<style scoped>

</style>

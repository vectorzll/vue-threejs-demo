<!-- 运营管理 -->
<template>
  <!-- <router-view></router-view> -->
  <router-view :key="this.$route.path"></router-view>
</template>

<script>
  export default {
    name: "advanceDemo"
  }
</script>

<style scoped>

</style>
<template>
  <div id="app">
    <!-- <main-menu/> -->
    <router-view></router-view>
  </div>
</template>

<script>
 import mainMenu from 'components/content/mainMenu'
export default {
  name: 'App',
  components: {
    mainMenu,
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>

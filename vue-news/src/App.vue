<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url이 만약 news면 <NewsView></NewsView> 이렇게 뿌려짐-->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

/* eslint-disable */
export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

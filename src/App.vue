<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter />
  </div>
</template>

<script>
import header from "./components/header";
import footer from "./components/footer";
export default {
  name: 'App',
  components: {
    appHeader: header,
    appFooter: footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

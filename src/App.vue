<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view/>
  </div>
</template>

<script>
import header from "./components/header";
export default {
  name: 'App',
  components: {
    appHeader: header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="css">
body {
  height: 100%;
  font-family: "Playfair Display", serif;
}

.btn:focus {
  box-shadow: none !important;
}
</style>

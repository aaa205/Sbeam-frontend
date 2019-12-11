<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: { Footer, NavBar },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

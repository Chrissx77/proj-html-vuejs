<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { store } from "./store";

export default {
  components: {
    Header,
    Footer,
  },

};
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/mixins" as *;
@use "./style/partials/variables" as *;

</style>

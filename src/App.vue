<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { store } from "./store";

export default {
  components: {
    Header,
    Footer,
  },
<<<<<<< HEAD
=======

>>>>>>> 984185a5398bbf9342c3da06a2d2f177c126f62e
};
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
  <div
    class="ritorno d-flex align-items-center justify-content-center rounded position-fixed"
  >
    <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/mixins" as *;
@use "./style/partials/variables" as *;

.ritorno {
  width: 40px;
  height: 40px;
  background-color: $darkPurple;
  color: $white;
  bottom: 10px;
  right: 20px;
  a {
    color: $white;
  }
}

.ritorno:hover {
  background-color: blue;
}
</style>

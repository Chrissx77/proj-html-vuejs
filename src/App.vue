<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

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

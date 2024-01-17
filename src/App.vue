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
// caratteristihc epr la scroll bar
::-webkit-scrollbar {
  width: 10px;
}
// caratteristiche per il dentro della scroll bar
::-webkit-scrollbar-thumb {
  background: #751db3;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
</style>

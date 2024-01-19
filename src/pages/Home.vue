<script>

//Importo i componenti
import LoveAnimation from "./LoveAnimation.vue";
import Facts from "./Facts.vue";
import SectionTeam from "./SectionTeam.vue";
import Client from "./Client.vue";
import Jumbotron from "./Jumbotron.vue";
import FeaturedProductions from "./FeaturedProductions.vue";
import OurProcess from "./OurProcess.vue";
import Loading from "./Loading.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
    FeaturedProductions,
    OurProcess,
    LoveAnimation,
    Facts,
    SectionTeam,
    Client,
    Loading
  },
  data() {
    return {
      //Paramentro del componente di Loading
      isLoading: true,
    };
  },
  mounted() {
    //pagina di loading con timer 1,5 secondi.
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<template>
  <!-- Componente di Loading-->
  <Loading v-if="isLoading" />
  <Jumbotron />
  <LoveAnimation />
  <Facts />
  <FeaturedProductions />
  <OurProcess />
  <SectionTeam />
  <Client />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

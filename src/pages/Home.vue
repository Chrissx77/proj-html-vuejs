<script>
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
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<template>
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

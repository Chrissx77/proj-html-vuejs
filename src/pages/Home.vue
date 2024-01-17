<script>
import LoveAnimation from "./LoveAnimation.vue";
import Facts from "./Facts.vue";
import SectionTeam from "./SectionTeam.vue";
import Client from "./Client.vue";
import Jumbotron from "./Jumbotron.vue";
import FeaturedProductions from "./FeaturedProductions.vue";
import OurProcess from "./OurProcess.vue";
<<<<<<< HEAD
=======
import Loading from "./Loading.vue";
>>>>>>> 984185a5398bbf9342c3da06a2d2f177c126f62e

export default {
  name: "Home",
  components: {
<<<<<<< HEAD
=======
    Loading,
>>>>>>> 984185a5398bbf9342c3da06a2d2f177c126f62e
    LoveAnimation,
    Facts,
    SectionTeam,
    Client,
    Jumbotron,
    FeaturedProductions,
    OurProcess,
  },
<<<<<<< HEAD
=======

  data(){
    return{
      isLoading: true,
    }
  },

  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 1500)
  },


>>>>>>> 984185a5398bbf9342c3da06a2d2f177c126f62e
};
</script>

<template>
<<<<<<< HEAD
=======
  <Loading v-if="isLoading" />
>>>>>>> 984185a5398bbf9342c3da06a2d2f177c126f62e
  <Jumbotron />
  <LoveAnimation />
  <Facts />
  <FeaturedProductions />
  <OurProcess />
  <SectionTeam />
  <Client />
<<<<<<< HEAD
  
=======
>>>>>>> 984185a5398bbf9342c3da06a2d2f177c126f62e
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

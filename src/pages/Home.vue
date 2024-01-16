<script>
import LoveAnimation from './LoveAnimation.vue';
import Facts from './Facts.vue';
import SectionTeam from './SectionTeam.vue';
import Client from './Client.vue';
import Jumbotron from './Jumbotron.vue';



export default {
  name: "Home",
  components:{
    LoveAnimation,
    Facts,
    SectionTeam,
    Client,
    Jumbotron,
  }
  
};
</script>

<template>
  <Jumbotron/>
  <LoveAnimation/>
  <Facts/>
  <SectionTeam/>
  <Client/>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

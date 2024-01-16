<script>
import LoveAnimation from './LoveAnimation.vue'; 
import Facts from './Facts.vue';
import SectionTeam from './SectionTeam.vue';
import Client from './Client.vue';

export default {
  name: "AboutUs",
  components:{
    LoveAnimation,
    Facts,
    SectionTeam,
    Client,
  }
  
};
</script>

<template>
  <h1>ABOUT</h1>
  <LoveAnimation/>
  <Facts/>
  <SectionTeam/>
  <Client/>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>
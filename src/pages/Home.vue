<script>
import LoveAnimation from './LoveAnimation.vue'; 
import Facts from './Facts.vue';
import SectionTeam from './SectionTeam.vue';

export default {
  name: "Home",
  components:{
    LoveAnimation,
    Facts,
    SectionTeam,
  }
  
};
</script>

<template>
  <LoveAnimation/>
  <Facts/>
  <SectionTeam/>

  <!-- Componente: FACTS -->
  <!-- Componente: ANIMATE YOUR PROJECT -->
  <!-- Componente: WE LOVE -->

  <h1>SONO HOME scritto da antonio</h1>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

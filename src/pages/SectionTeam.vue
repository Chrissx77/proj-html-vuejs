<script>
export default {
  name: "SectionTeam",
  data(){
    return{
      cardTeam:[
        {
          image:'src/assets/team1.png',
          name:'Don Woods',
          label:'Administrator',
        },

        {
          image:'src/assets/team2.png',
          name:'Tomas Nash',
          label:'2d Animator & Compositor',
        },

        {
          image:'src/assets/team2.png',
          name:'Hector Vargas',
          label:'Project Lead & Senior Animator',
        },

        {
          image:'src/assets/team4.png',
          name:'Robert Coleman',
          label:'Owner & Creative Director',
        },


      ]
    }
  }
  
};
</script>

<template>
    <h1>SONO SECTION TEAM</h1>
    <div v-for="(card, i) in cardTeam" >
      <img :src= card.image alt="">
      {{ card.name }}
      {{ card.label }}
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>
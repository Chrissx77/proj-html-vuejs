<script>
export default {
  name: "Facts",
  data(){
    return{
      cardFacts:[
        {
          label:'Projects done',
          number:'700',
        },

        {
          label:'Happy Clients',
          number:'250',

        },

        {
          label:'Team Members',
          number:'25',

        },

        {
          label:'Years on the market',
          number:'12',
        },
      ]
    }
  }

};
</script>

<template>
  <h1>SONO QUICK FACTS</h1>
  <div v-for="(card, i) in cardFacts" >
    {{ card.label }}
    {{ card.number }}
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

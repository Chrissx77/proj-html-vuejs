<script>
export default {
  name: "Client",
  data() {
    return {
      cardClient: [
        {
          image: "src/assets/sponsor1.png",
        },

        {
          image: "src/assets/sponsor2.png",
        },

        {
          image: "src/assets/sponsor3.png",
        },

        {
          image: "src/assets/sponsor4.png",
        },

        {
          image: "src/assets/sponsor5.png",
        },

        {
          image: "src/assets/sponsor6.png",
        },
      ],
    };
  },
};
</script>

<template>
  <h1>SONO CLIENT</h1>
  <div>
    <div>Why Anidio studio</div>
    <h1>We Love Our Clients</h1>
    <p>
      We are trusted throughout adland and have a wealth of recommendations from
      start-ups to renowned global brands.
    </p>

      <div class="image" >
        <img :src= image.image alt="" v-for="image in cardClient">
      </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.image{
  @include flex;
}
</style>

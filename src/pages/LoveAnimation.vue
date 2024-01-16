<script>
export default {
  name: "LoveAnimation",

  data() {
    return {
      cardLoveAnimation: [
        {
          image: "src/assets/smart1.png",
          title: "3D modeling",
          paragraph:
            "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
        },
        {
          image: "src/assets/smart2.png",
          title: "Collaboration",
          paragraph:
            "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
        },
        {
          image: "src/assets/smart3.png",
          title: "Creativity",
          paragraph:
            "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
        },
      ],
    };
  },
};
</script>

<template>
  <h1>SONO LOVE ANIMATION</h1>
  <div v-for="(card, i) in cardLoveAnimation">
    <img :src="card.image" alt="" />
    {{ card.title }}
    {{  card.paragraph }}
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

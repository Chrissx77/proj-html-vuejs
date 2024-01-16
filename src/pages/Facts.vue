<script>
export default {
  name: "Facts",
  data() {
    return {
      cardFacts: [
        {
          label: "Projects done",
          number: "700",
        },

        {
          label: "Happy Clients",
          number: "250",
        },

        {
          label: "Team Members",
          number: "25",
        },

        {
          label: "Years on the market",
          number: "12",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div>
      <img src="../assets/shape-top.png" alt="" />
    </div>
    <div class="globe-img">
      <img src="../assets/globe.png" alt="" />
    </div>
    <div class="container-fluid">
      <div class="row">
        <h1 class="text-center text-white">audio quick facts</h1>
        <div
          class="col-6 col-lg-4 col-xl-3 text-center"
          v-for="(card, i) in cardFacts"
          :key="i"
        >
          <div class="cards my-2 py-4">
            <div class="text-white">
              {{ card.number }} <i class="fa-solid fa-plus text-white"></i>
            </div>
            <span>{{ card.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src="../assets/shape-bottom.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
section {
  background-image: url(../assets/counter-bg.png);
  margin-top: 200px;
  position: relative;

  .globe-img {
    position: absolute;
    max-width: 300px;
    img {
      width: 100%;
    }
  }
  .container-fluid {
    @include contain;
    padding: 100px 0;

    .cards {
      border: 1px solid white;
      border-radius: 10px;
      div {
        font-size: 50px;
      }
      span {
        color: $orange;
      }
    }
  }
}
</style>

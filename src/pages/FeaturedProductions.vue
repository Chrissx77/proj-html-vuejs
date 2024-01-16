<script>
export default {
  name: "FeaturedProductions",

  data() {
    return {
      cardProd: [
        {
          image: "src/assets/work1.png",
        },

        {
          image: "src/assets/work2.png",
        },

        {
          image: "src/assets/work3.png",
        },

        {
          image: "src/assets/work4.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrap">
    <div>
      <p class="label">Our Works</p>
      <h1 class="mainTitle">Featured Productions</h1>
      <p class="paragraph">
        Here's just a small sample of some of those projects that we're quite
        proud of. If you're looking for something specific feel free to get in
        contact with us.
      </p>
    </div>
    <div class="cardContainer">
      <div v-for="card in cardProd" class="image">
          <img :src="card.image" alt="" />
          <div class="btn-play">
            <i class="fa-solid fa-circle-play" style="color: #fff;"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.wrap {
  min-height: 500px;
  text-align: center;

  div {
    width: 50%;
    margin: 0 auto;

    .label {
      color: $blue;
      font-weight: bold;
    }
    .mainTitle {
      color: $purple;
    }

    .paragraph {
      color: $purple;
    }
  }

  .cardContainer {
    @include flex;
    flex-wrap: wrap;
    gap: 5px;
    .image{
        width: calc(100% / 2 - 5px);
        position: relative;
        img{
            width: 100%;
           
        }
        .btn-play{
            position: absolute;
            top: 40%;
            left: 25%;
            i{
                font-size: 3rem;
                background-color: $orange;
                border-radius: 50%;
            }
        }
    }
  }
}
</style>

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
    <div class="container">
      <div class="row gy-5">
        <div v-for="card in cardProd" class="col-12 col-md-6 image my-2">
          <img :src="card.image" alt="" />
          <div class="btn-play">
            <i class="fa-solid fa-circle-play" style="color: #fff"></i>
          </div>
        </div>
      </div>
    </div>

    

  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.image{
  position: relative;
  .btn-play{
    position: absolute;
    top: 40%;
    left: 45%;
    font-size: 4rem;
    i{
      background-color: $orange;
      border-radius: 50%;
    }
  }
}

img{
  width: 100%;
  position: relative;
 
}
.box{
  background-color: red;
  width: 100px;
  height: 100px;
}

.wrap {
  min-height: 500px;
  text-align: center;

  div {
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
    .image {
      width: calc(100% / 2 - 5px);
      position: relative;
      img {
        width: 100%;
      }
      .btn-play {
        position: absolute;
        top: 40%;
        left: 25%;
        i {
          font-size: 3rem;
          background-color: $orange;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>

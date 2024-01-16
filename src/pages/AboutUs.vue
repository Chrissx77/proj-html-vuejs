<script>
import LoveAnimation from "./LoveAnimation.vue";
import Facts from "./Facts.vue";
import SectionTeam from "./SectionTeam.vue";
import Client from "./Client.vue";

export default {
  name: "AboutUs",
  components: {
    LoveAnimation,
    Facts,
    SectionTeam,
    Client,
  },
};
</script>

<template>
  <div class="jumbotron-bg">
    <div class="globo-img1">
      <img src="../assets/globe1.png" alt="immagine pianeta" />
    </div>
    <div class="globo-img3">
      <img src="../assets/globe3.png" alt="immagine pianeta" />
    </div>
    <div class="globe-img2">
      <img
        src="../assets/globe2.png"
        alt="immagine pianeta"
        class="globo-img2"
      />
    </div>
    <div class="row contenitore">
      <div class="col-6 jumbotron-left">
        <h1>About us</h1>
        <img src="../assets/dots-right.png" alt="" />
      </div>
      <div class="col-6 jumbotron-right">
        <img src="../assets/dots-left.png" alt="" />
      </div>
    </div>
    <div class="light-img">
      <img src="../assets/light.png" alt="" />
    </div>
    <img src="../assets/rocket-banner.png" alt="" class="img-persona" />
    <img src="../assets/bottom-shape.png" alt="" class="onde" />
  </div>
  <LoveAnimation />
  <Facts />
  <SectionTeam />
  <Client />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.jumbotron-bg {
  background-image: url(../assets/banner-bg.png);
  background-size: cover;
  height: 500px;
  position: relative;
  display: flex;

  .contenitore {
    @include contain;
  }

  .onde {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }

  .jumbotron-left img,
  .jumbotron-right img {
    width: 100%;
  }

  .jumbotron-left h1 {
    position: relative;
    top: 250px;
    color: $white;
  }

  .img-persona {
    position: absolute;
    width: 350px;
    top: 100px;
    right: 150px;
  }
  .globo-img1 {
    position: absolute;
    top: 12%;
    left: 9%;
    width: 130px;
    height: 130px;
  }

  .globo-img3 {
    position: absolute;
    top: -18%;
    left: 33%;
    max-width: 300px;
    height: 300px;
  }

  .globe-img2 {
    position: absolute;
    top: 18%;
    right: 28%;
    width: 100px;
    height: 100px;
  }

  .light-img {
    position: absolute;
    right: 9%;
    top: 10%;
    z-index: 1;
  }
}
</style>

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
  <!-- inizio prima sezione jumbotron -->
  <section class="jumbotron-bg position-relative d-flex">
    <div class="row">
      <!-- contenitore contenente cose in generale  -->
      <div class="col-12">
        <!-- inizio immagini usate per sfondo  -->
        <div class="globo-img1 position-absolute">
          <img src="../assets/globe1.png" alt="immagine pianeta" />
        </div>
        <div class="globo-img3 position-absolute">
          <img src="../assets/globe3.png" alt="immagine pianeta" />
        </div>
        <div class="globe-img2 position-absolute">
          <img
            src="../assets/globe2.png"
            alt="immagine pianeta"
            class="globo-img2"
          />
        </div>
        <!-- fine immagini usate per sfondo  -->
        <!-- inizio due contenitore dove ci saranno due sfondi e testo  -->
        <div class="container">
          <div class="row contenitore">
            <div class="col-6 jumbotron-left">
              <div class="position-absolute about-us">
                <h1>About us</h1>
                <div class="mt-4">
                  <a>
                    <router-link :to="{ name: 'home' }"> home </router-link>
                  </a>
                  <i class="fa-solid fa-arrow-right"></i>
                  <a href=""> about us</a>
                </div>
              </div>
              <img src="../assets/dots-right.png" alt="" />
            </div>
            <div class="col-6 jumbotron-right">
              <img src="../assets/dots-left.png" alt="" />
            </div>
          </div>
        </div>
        <!-- inizio immagini usate per sfondo  -->
        <div class="light-img position-absolute">
          <img src="../assets/light.png" alt="" />
        </div>
        <div class="img-persona position-absolute">
          <img src="../assets/rocket-banner.png" alt="" />
        </div>
        <div class="onde position-absolute">
          <img src="../assets/bottom-shape.png" alt="" />
        </div>
        <!-- fine immagini usate per sfondo  -->
      </div>
    </div>
  </section>
  <LoveAnimation />
  <Facts />
  <SectionTeam />
  <Client />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// inizio sezione jumbotron
// caratteristiche sfondo jumbotron
.jumbotron-bg {
  background-image: url(../assets/banner-bg.png);
  background-size: cover;
  min-height: 400px;
  // caratteristiche tutte immagini dentro a sezione 
  img {
    width: 100%;
  }
// caratteristiche contenitore contenente due sfondi e testo 
  .contenitore {
    @include contain;

    .jumbotron-left .about-us {
      top: 200px;
      color: $white;
      a {
        color: $white;
      }
    }
  }
// caratteristiche e posizionamento di quasi tutte le immagini dentro alla sezione 
  .onde {
    bottom: 0px;
  }

  .img-persona {
    width: 300px;
    top: 100px;
    right: 150px;
    animation: rocket 2s linear infinite;
    animation-delay: 0.3s;
  }
  .globo-img1 {
    top: 12%;
    left: 9%;
    width: 130px;
    height: 130px;
    animation: rotazione 4s linear infinite;
    animation-delay: 0.2s;
  }

  .globo-img3 {
    top: -18%;
    left: 33%;
    max-width: 300px;
    height: 300px;
  }

  .globe-img2 {
    top: 18%;
    right: 28%;
    width: 100px;
    height: 100px;
    animation: rotazione 4s linear infinite;
    animation-delay: 0.2s;
  }

  .light-img {
    right: 9%;
    top: 10%;
    z-index: 1;
    animation: light 2s linear infinite;
  }
}
// animazioni di immagini 
@keyframes rotazione {
  0% {
    transform: rotate(360deg);
  }
}

@keyframes rocket {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateX(5px);
  }

  100% {
    transform: translateY(5px);
  }
}

@keyframes light {
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@media screen and (max-width: 991px) {
  .col-12 > .globo-img3,
  .img-persona {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  .col-12 > .light-img {
    display: none;
  }
}
// fine sezione jumbotron
</style>

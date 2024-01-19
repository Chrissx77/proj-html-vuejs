<script>
// import page loveAnimation
import LoveAnimation from "./LoveAnimation.vue";
// import page facts
import Facts from "./Facts.vue";
// import page sectionsteam
import SectionTeam from "./SectionTeam.vue";
// import page client
import Client from "./Client.vue";
// import store
import { store } from "../store";
// import loading
import Loading from "./Loading.vue";

export default {
  name: "AboutUs",
  components: {
    LoveAnimation,
    Facts,
    SectionTeam,
    Client,
    Loading,
  },
  data() {
    return {
      // array con dentro  card dei servizzi della pagina/ azienda
      cards: [
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process4.png",
          title: "Motion Graphics",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process5.png",
          title: "Character Design",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "src/assets/process1.png",
          title: "Storyboards",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process6.png",
          title: "Animatics",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process7.png",
          title: "Film and TV",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "src/assets/process1.png",
          title: "Script writing",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
      ],
      store,
      isLoading: true,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let elemento = document.querySelector(".descrizione");
    // array con dentro le cards
    let cards = document.querySelectorAll(".card-service");

    for (let i = 0; i < this.cards.length; i++) {
      store.transformElement(cards[i]);
    }
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(elemento);
    // console.log(cards);
    // Chiamata alla funzione all'interno dell'oggetto

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<template>
  <Loading v-if="isLoading" />
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
        <!-- inizio due contenitore dove ci saranno due sfondi e testo  -->
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
  <LoveAnimation class="pt-0 pb-4" />
  <Facts />
  <!-- caratteristiche della sezione  -->
  <section>
    <div class="service">
      <div class="container-fluid py-4">
        <div class="row" style="height: 116px">
          <div class="col-12 text-center descrizione">
            <h5>Our Service</h5>
            <h2>Animations, Bespoke and Beautiful</h2>
            <p>
              With the magic of imagination we are able to tell stories, animate
              adventures, create art,
            </p>
          </div>
        </div>
        <div class="row" style="min-height: 530px">
          <!-- div contenente tutte le card dell'array  -->
          <div
            class="col-12 col-md-6 col-lg-4 text-center my-4"
            v-for="(card, i) in cards"
            :key="i"
          >
            <div
              class="my-2 py-3 shadow border rounded card-service"
              style="min-height: 200px"
            >
              <a href="#"> <img :src="card.img" alt="" /></a>
              <a href="#"
                ><h4>{{ card.title }}</h4>
              </a>

              <p>{{ card.paragrafo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    width: 100%;
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
    animation: globe1 4s linear infinite;
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
    animation: globe1 4s linear infinite;
    animation-delay: 0.2s;
  }

  .light-img {
    right: 9%;
    top: 10%;
    z-index: 1;
    animation: lightopen 2s linear infinite;
  }
}
// caratteristiche immagini al cambio pixel schermo
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
// inizio sezione service
.service {
  @include contain;
  // colore del testo
  a,
  h2 {
    color: $darkPurple;
  }
  h5 {
    color: blue;
  }
}
// fine sezione service
// caratteristiche riguardo a componente descrizione
.scompari {
  display: none;
}
// transizione descizione
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: $duration;
}
</style>

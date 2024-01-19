<script>
// import store
import { store } from "../store";
export default {
  name: "Client",
  data() {
    return {
      // immagini sponsor clienti
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
      store,
    };
  },
  mounted() {
    // elemento preso dentro al documento
    let elementclient = document.querySelector(".elementclienti");
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(elementclient);
    // libreria glide
    new Glide("#carouselclient", {
      type: "carousel",
      // inizio delle immagini
      startAt: 0,
      // Numero di elementi visualizzati contemporaneamente
      perView: 5,
      // Autoplay ogni tot secondi
      autoplay: 2000,
      // quando mouse è sopra si ferma autoplay
      hoverpause: true,
      // spazio tra le card
      gap: 16,
      // cambio ad ogni breackpoint
      breakpoints: {
        762: {
          perView: 3,
        },
        1042: {
          perView: 4,
        },
      },
    }).mount();
  },
};
</script>

<template>
  <section>
    <!-- sezione clienti  -->
    <div class="clients">
      <div class="container-fluid">
        <div class="row" style="height: 125px">
          <div class="col-12 elementclienti text-center">
            <h5>Why Anidio studio</h5>
            <h1>We Love Our Clients</h1>
            <p>
              We are trusted throughout adland and have a wealth of
              recommendations from start-ups to renowned global brands.
            </p>
          </div>
        </div>
        <div class="row text-center my-4">
          <div class="glide" id="carouselclient">
            <!-- ha ovrflow hidden  -->
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide" v-for="card in cardClient">
                  <img :src="card.image" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.clients {
  @include contain;
  // caratteristiche colore del testo
  h1 {
    color: $darkPurple;
  }
  h5 {
    color: blue;
  }
  img {
    width: 100%;
  }
}
// caratteristiche riguardo  componente elementiclient
.scompari {
  display: none;
}
// transizione elementclient
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: 4s;
}
</style>

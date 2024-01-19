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
          <!-- cards contenenti i loghi dei clienti -->
          <div
            class="col-6 col-md-4 col-lg-3 col-xxl-2"
            v-for="(image, i) in cardClient"
            :key="i"
          >
            <img :src="image.image" alt="" />
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

@keyframes comparsa {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

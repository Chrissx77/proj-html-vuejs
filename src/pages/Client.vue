<script>
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
    let elementclient = document.querySelector(".elementclient");
    store.saluta(elementclient);
  },
};
</script>

<template>
  <section>
    <!-- sezione clienti  -->
    <div class="clients">
      <div class="container-fluid">
        <div class="row text-center elementclient">
          <h5>Why Anidio studio</h5>
          <h1>We Love Our Clients</h1>
          <p>
            We are trusted throughout adland and have a wealth of
            recommendations from start-ups to renowned global brands.
          </p>
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
  h2 {
    color: darkPurple;
  }
  h5 {
    color: blue;
  }
}
// caratteristiche riguardo al title di seione facts
.scompari {
  display: none;
}
// transizione data al title
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: 3s;
}

@keyframes comparsa {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

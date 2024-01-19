<script>
// import sotre
import { store } from "../store";
export default {
  name: "Facts",
  data() {
    return {
      // array con dentro informazioni
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
      store,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let ElementoFacts = document.querySelector(".title");
    // evento
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(ElementoFacts);
  },
};
</script>

<template>
  <section class="position-relative">
    <div>
      <img src="../assets/shape-top.png" alt="#" class="onde" />
    </div>
    <div class="globe-img position-absolute">
      <img src="../assets/globe.png" alt="#" />
    </div>
    <!-- inizio infromazioni facts -->
    <div class="container-fluid position-relative">
      <div class="row">
        <div style="height: 110px">
          <h1 class="text-center text-white title">anidio quick facts</h1>
        </div>
        <!-- card con dentro informazioni dentro all'array  -->
        <div
          class="col-12 col-sm-6 col-lg-4 col-xxl-3 text-center"
          v-for="(card, i) in cardFacts"
          :key="i"
        >
          <div class="cards my-2 py-4 border border-white">
            <div class="text-white">
              {{ card.number }} <i class="fa-solid fa-plus text-white"></i>
            </div>
            <span>{{ card.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- fine informazioni facts -->
    <div>
      <img src="../assets/shape-bottom.png" alt="#" class="onde" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
section {
  background-image: url(../assets/counter-bg.png);
  margin-top: 200px;
  // caratteristiche per immagini
  .onde {
    width: 100%;
    display: block;
  }

  .globe-img {
    max-width: 350px;
    top: 50%;
    left: 50%;
    animation: rotazione 30s linear infinite;
    animation-delay: 0.3s;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
    }
  }
  // caratteristiche per informazioni facts
  .container-fluid {
    @include contain;
    padding: 100px 0;
    z-index: 100;

    .title {
      h1 {
        font-size: 45px;
      }
    }

    .cards {
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
// animazione pianeta sottofondo
@keyframes rotazione {
  0% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
// caratteristiche over sulle cardn
.cards:hover {
  transform: rotate(4deg);
}

// caratteristiche riguardo componente title
.scompari {
  display: none;
}
// transizione data al title
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: $duration;
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

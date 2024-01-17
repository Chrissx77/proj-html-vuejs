<script>
import { store } from "../store";
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
      store,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let ElementoFacts = document.querySelector(".title");
    // evento
    // Chiamata alla funzione all'interno dell'oggetto
    store.saluta( ElementoFacts);
  },
};
</script>

<template>
  <section>
    <div>
      <img src="../assets/shape-top.png" alt="#" class="onde" />
    </div>
    <div class="globe-img">
      <img src="../assets/globe.png" alt="#" />
    </div>
    <div class="container-fluid position-relative">
      <div class="row">
        <div style="height: 110px">
          <h1 class="text-center text-white title">audio quick facts</h1>
        </div>
        <div
          class="col-12 col-sm-6 col-xl-4 col-xxl-3 text-center"
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
  position: relative;

  .onde {
    width: 100%;
    display: block;
  }

  .globe-img {
    position: absolute;
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

// caratteristiche riguardo al title di seione facts
.scompari {
  display: none;
}
// transizione data al title
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: 2s;
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

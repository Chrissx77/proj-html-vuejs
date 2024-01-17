<!-- <script>
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
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let elemento = document.querySelector(".title");
    let card = document.querySelector(".cards");
    // // altezza elemento singolo dove si attiverà la transizione
    separazione(elemento, card);

    // evento
    window.addEventListener("scroll", function () {
      // quando i px della  finestra sono di piu rispetto al posizionamento dell elemento rimuove la classe scompari e aggiunge la transizione
      if (window.scrollY > separazione(elemento,card)) {
        elemento.classList.remove("scompari");
        elemento.classList.add("transizione-scroll");
      } else {
        // else la toglie a prescindere
        elemento.classList.add("scompari");
      }
    });

    function separazione(ele1, ele2) {
      var elementRect = ele1.getBoundingClientRect();
      var elementRect2 = ele2.getBoundingClientRect();
      // console.log(elementRect, elementRect2);
      // elementRect.y -= 500;
      // elementRect2.y -= 500;
    }
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
        <div class="title">
          <h1 class="text-center text-white">audio quick facts</h1>
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
  transition: all 0.9s;
  animation-name: comparsa;
  animation-duration: 2s;
}

@keyframes comparsa {
  0% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}
</style> -->

<script>
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
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let ElementoFacts = document.querySelector(".title");
    // // altezza ElementoFacts singolo dove si attiverà la transizione
    var elementRect = ElementoFacts.getBoundingClientRect();
    console.log(elementRect);
        // valore per farlo comparire prima
    elementRect.y -= 500;
    // evento
    window.addEventListener("scroll", function () {
      // quando i px della  finestra sono di piu rispetto al posizionamento dell ElementoFacts rimuove la classe scompari e aggiunge la transizione
      if (window.scrollY > elementRect.y) {
        ElementoFacts.classList.remove("scompari");
        ElementoFacts.classList.add("transizione-scroll");
      } else {
        // else la toglie a prescindere
        ElementoFacts.classList.add("scompari");
      }
    });
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
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

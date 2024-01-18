<script>
import { store } from "../store";
export default {
  name: "SectionTeam",
  data() {
    return {
      // array di persone del team
      // blu: "prova",
      // d_block: "display",

      cardTeam: [
        {
          image: "src/assets/team1.png",
          name: "Don Woods",
          label: "Administrator",
          dispay: false,
        },

        {
          image: "src/assets/team2.png",
          name: "Tomas Nash",
          label: "2d Animator & Compositor",
          dispay: true,
        },

        {
          image: "src/assets/team2.png",
          name: "Hector Vargas",
          label: "Project Lead & Senior Animator",
          dispay: true,
        },

        {
          image: "src/assets/team4.png",
          name: "Robert Coleman",
          label: "Owner & Creative Director",
          dispay: true,
        },

        {
          image: "src/assets/team1.png",
          name: "Don Woods",
          label: "Administrator",
          dispay: true,
        },

        {
          image: "src/assets/team2.png",
          name: "Tomas Nash",
          label: "2d Animator & Compositor",
          dispay: false,
        },

        {
          image: "src/assets/team2.png",
          name: "Hector Vargas",
          label: "Project Lead & Senior Animator",
          dispay: false,
        },

        {
          image: "src/assets/team4.png",
          name: "Robert Coleman",
          label: "Owner & Creative Director",
          dispay: false,
        },
      ],
      store,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let elementoTeam = document.querySelector(".elementiteam");
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(elementoTeam);

    // let number = 0;
    // let number1 = 4;
    // setInterval(() => {
    //   number++;
    //   number1++;
    //   if (number1 > this.cardTeam.length - 1) {
    //     number1 = 0;
    //   }
    //   if (number > this.cardTeam.length - 1) {
    //     number = 0;
    //   }

    //   this.cardTeam[number].dispay = false;

    //   this.cardTeam[number1].dispay = true;
    // }, 3000);
  },
};
</script>

<template>
  <section>
    <!-- section team inizio  -->
    <div class="team py-5">
      <div class="containe-fluid">
        <div class="row text-center position-relative">
          <!-- descrizione del team in generale  -->
          <div class="col-12" style="height: 125px">
            <div class="elementiteam">
              <h5>Anidio Magic Team Member</h5>
              <h1>Let Us Animate Your Project</h1>
              <p>
                We create new worlds!Let’s collaborate and create engaging,
                effective, award-winning animations
              </p>
            </div>
          </div>
          <!-- inizio componenti del team -->
          <div class="row text-center my-5">
            <div
              class="col-12 col-md-6 col-lg-4 col-xl-3 my-5 display"
              v-for="(card, i) in cardTeam"
              :key="i"
            >
              <div class="team-iesimo">
                <img :src="card.image" alt="" />
                <div class="my-4">
                  <h4>
                    {{ card.name }}
                  </h4>
                </div>
                <p>
                  {{ card.label }}
                </p>
                <ul class="d-flex ps-0 justify-content-center">
                  <!-- icone social -->
                  <li class="mx-3">
                    <a
                      href="#"
                      class="rounded-circle d-flex align-items-center justify-content-center"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                  <li class="mx-3">
                    <a
                      href="#"
                      class="rounded-circle d-flex align-items-center justify-content-center"
                      ><i class="fa-brands fa-x-twitter"></i
                    ></a>
                  </li>
                  <li class="mx-3">
                    <a
                      href="#"
                      class="rounded-circle d-flex align-items-center justify-content-center"
                      ><i class="fa-brands fa-facebook"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="planet-img1">
            <img src="../assets/shape.png" alt="#" />
          </div>
          <div class="planet-img2">
            <img src="../assets/shape2.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
// caratteristiche descrizione del team
.team {
  @include contain;

  h1 {
    color: $darkPurple;
  }
  h5 {
    color: blue;
  }
  // caratteristiche card
  .team-iesimo {
    background-color: #fff5f0;
    padding: 10px 20px;
    border-radius: 15px;

    img {
      width: 100%;
      position: relative;
      top: -70px;
    }

    li {
      a {
        background-color: $white;
        width: 40px;
        height: 40px;
      }
      // over su icone social
      a:hover {
        background-color: $orange;
        color: $white;
      }
    }
  }
  // immagini pianeti di sottofondo
  .planet-img1 {
    position: absolute;
    max-width: 750px;
    z-index: -2;
    left: -60px;
    animation: zoominside 4s linear infinite;
    animation-delay: 0.8s;
    // la fa andare anvanti e indietro senza farla ripartire a suo punto di partenza Play the animation forwards first, then backwards:
    animation-direction: alternate;
    img {
      width: 100%;
    }
  }

  .planet-img2 {
    position: absolute;
    max-width: 750px;
    right: 0px;
    z-index: -1;
    animation: zoomasseX 4s linear infinite;
    animation-delay: 0.8s;
    // la fa andare anvanti e indietro senza farla ripartire a suo punto di partenza Play the animation forwards first, then backwards:
    animation-direction: alternate;
    img {
      width: 100%;
    }
  }
  // hover su card che traslata le immagini
  .team-iesimo:hover img {
    transform: translate(0px, 10px);
  }
}
// caratteristiche riguardo componente elementiteam
.scompari {
  display: none;
}
// transizione elementiteam al descizione
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: $duration;
}

@keyframes comparsa {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
// animazione pianeti
@keyframes zoominside {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.9);
  }
}

@keyframes zoomasseX {
  100% {
    // trasla sull asse delle x
    transform: translateX(50px);
  }
}
</style>

<!--  :class="card.dispay ? blu : ''" -->

<!-- // provaaa
.prova {
  display: none;
}

.display {
  // animation: traslazione 3s linear infinite;

  animation-name: traslazione;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes traslazione {
  50% {
    transform: translateX(+382px);
  }
  100% {
    transform: translateX(+382px);
  }
} -->

<!-- overflow-hidden al contenitore delle immagini -->

<!--provare con bootstrap e mettere display hidden  -->

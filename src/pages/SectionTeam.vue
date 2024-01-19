<script>
// import store
import { store } from "../store";
export default {
  name: "SectionTeam",
  data() {
    return {
      // array di persone del team
      cardTeam: [
        {
          image: "src/assets/team1.png",
          name: "Don Woods",
          label: "Administrator",
        },

        {
          image: "src/assets/team2.png",
          name: "Tomas Nash",
          label: "2d Animator & Compositor",
        },

        {
          image: "src/assets/team2.png",
          name: "Hector Vargas",
          label: "Project Lead & Senior Animator",
        },

        {
          image: "src/assets/team4.png",
          name: "Robert Coleman",
          label: "Owner & Creative Director",
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
    // libreria glide
    new Glide("#carouselsectionteam", {
      type: "carousel",
      // inizio delle immagini
      startAt: 0,
      // Numero di elementi visualizzati contemporaneamente
      perView: 4,
      // Autoplay ogni tot secondi
      autoplay: 2000,
      // quando mouse è sopra si ferma autoplay
      hoverpause: true,
      // spazio tra le card
      gap: 16,
      // cambio ad ogni breackpoint
      breakpoints: {
        935: {
          perView: 2,
        },
        1337: {
          perView: 3,
        },
      },
    }).mount();
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
            <div class="glide" id="carouselsectionteam">
              <!-- div con dentro i membri del team -->
              <!-- caratteristiche glide -->
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li
                    class="glide__slide"
                    v-for="card in cardTeam"
                    style="
                      background-color: #fff5f0;
                      padding: 10px;
                      border-radius: 15px;
                    "
                  >
                    <img :src="card.image" alt="#" style="width: 100%" />
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- immagini sfondo di sezione -->
          <div class="planet-img1 position-absolute">
            <img src="../assets/shape.png" alt="#" />
          </div>
          <div class="planet-img2 position-absolute">
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
  li {
    a {
      background-color: $white;
      width: 40px;
      height: 40px;
    }
    // hover su icone social
    a:hover {
      background-color: $orange;
      color: $white;
    }
  }
}
// immagini pianeti di sottofondo
.planet-img1 {
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
// caratteristiche riguardo componente elementiteam
.scompari {
  display: none;
}
// transizione elementiteam al descizione
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: $duration;
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

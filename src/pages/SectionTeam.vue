<script>
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
  },
};
</script>

<template>
  <section>
    <!-- section team inizio  -->
    <div class="team py-5">
      <div class="containe-fluid">
        <div class="row text-center">
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
              class="col-12 col-md-6 col-lg-4 col-xl-3 my-5"
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
                  <li>
                    <a
                      href="#"
                      class="rounded-circle d-flex align-items-center justify-content-center"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="rounded-circle d-flex align-items-center justify-content-center"
                      ><i class="fa-brands fa-x-twitter"></i
                    ></a>
                  </li>
                  <li>
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
      margin: 0px 10px;

      a {
        background-color: $white;
        width: 40px;
        height: 40px;
      }
      // over su icone social
      a:hover {
        background-color: $orange;
        color: white;
      }
    }
  }
  // hover su card che traslata le immagini
  .team-iesimo:hover img {
    transform: translate(0px, 10px);
  }
}
// caratteristiche riguardo  sezione sectionTeam
.scompari {
  display: none;
}
// transizione elementiteam al descizione
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

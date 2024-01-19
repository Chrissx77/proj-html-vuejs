<script>
import { store } from "../store";
export default {
  name: "OurProcess",
  data() {
    return {
      // Array Dati del Componente
      cardProcess: [
        {
          image: "src/assets/process1.png",
          title: "Scripting",
          paragraph:
            "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
          num: "1",
        },

        {
          image: "src/assets/process2.png",
          title: "Pre-Production",
          paragraph:
            "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
          num: "2",
        },
      ],
      store,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let elementclient = document.querySelector(".descriptionprocess");
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(elementclient);
  },
};
</script>
<template>
  <!-- Immagine rocketWomen -->
  <div class="container my-5">
    <div class="row gy-5">
      <div class="col-12 col-md-6 imageRocketWomen">
        <div class="rocketWomen">
          <img src="../assets/process-thumb.png" alt="" srcset="" />
        </div>
      </div>

      <div class="text col-12 col-md-6">
        <div style="min-height: 160px">
          <div class="descriptionprocess">
            <p class="label">Our Process</p>
            <h1 class="mainTitle">Our Process for Your Animation Production</h1>
            <p class="paragraph">
              We have an effective process for working on animation
            </p>
          </div>
        </div>

        <!-- Container Cards componente -->
        <div class="container">
          <div class="row cardsContainer">
            <div class="cardBox col-12 col-md-6" v-for="card in cardProcess">
              <div class="card p-4 my-2" style="height: 100%">
                <div class="cardImage">
                  <img :src="card.image" alt="" srcset="" />
                </div>
                <div>
                  <h5>{{ card.title }}</h5>
                </div>

                <div>
                  {{ card.paragraph }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.rocketWomen {
  img {
    width: 100%;
  }
}

.cardBox {
  text-align: center;
}

.rocketWomen:hover {
  transform:translate(5%);
  transition: 1s;
}

.label{
  color: $blue;
  font-weight: bold;
}

.mainTitle{
  color: $purple;
}

.paragraph{
  color: $purple;
}

.card{
  div{
    margin: 5px;
  }

  .cardImage{
    background-color: $lightGray ;
    border-radius: 50%;
    border: none;
    padding: 50px 0;
  }
}

.card{
  border-radius: 30px;
}

//Sezione Media Query
@media screen and (max-width: 600px) {
  .imageRocketWomen {
    order: 5;
  }

  .cardBox {
    order: 1;
    width: 60%;
  }

  .cardsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


//Sezione KeyFrames
@keyframes fly1 {
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(+20px);
  }
  100% {
    transform: translateX(0px);
  }
}
// caratteristiche riguardo  componente descriptionprocess
.scompari {
  display: none;
}
// transizione data all testo della descirzione pagina
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: $duration;
}


</style>

<script>
import { store } from "../store";
export default {
  name: "LoveAnimation",

  data() {
    return {
      cardLoveAnimation: [
        {
          image: "src/assets/smart1.png",
          title: "3D modeling",
          paragraph:
            "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
        },
        {
          image: "src/assets/smart2.png",
          title: "Collaboration",
          paragraph:
            "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
        },
        {
          image: "src/assets/smart3.png",
          title: "Creativity",
          paragraph:
            "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
        },
      ],
      store,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    let elementoAnimation = document.querySelector(".description-animation");
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(elementoAnimation);
  },
};
</script>

<template>
  <div class="wrap">
    <div>
      <div class="description-animation-contenitore">
        <div class="description-animation">
          <p class="label">Our Love For Animation</p>
          <h1 class="mainTitle">
            We're Storytelling Experts With Creative Smarts
          </h1>
          <p class="paragraph">
            Our culture inspires the creative and innovation spirit found
            throughout our Studio. We breathe life into new ideas!
          </p>
        </div>
      </div>

      <div class="containerCards">
        <div class="card" v-for="(card, i) in cardLoveAnimation">
          <div class="cardImage">
            <img :src="card.image" alt="" />
          </div>
          <div>
            {{ card.title }}
          </div>
          <div>
            {{ card.paragraph }}
          </div>
        </div>
      </div>
    </div>
    <img class="imageLeft" src="../assets/smart.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

@media screen and (max-width: 1200px) {
  .imageLeft{
    display: none;
  }

  .containerCards{
    flex-direction: column;
  }

  .wrap{
    div{
      width: 90%;
    }
  }



}

.wrap {
  padding-top: 16%;
  @include flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  position: relative;
  left: 0;

  

  .imageCard {
    position: relative;
  }

  div {
    border-radius: 30px;
    width: 70%;
    margin: 0 auto;
    gap: 20px;
    .containerCards {
      div {
        padding: 5px;
      }
      @include flex;
    }
  }

  .label {
    color: $blue;
    font-weight: bold;
  }

  .mainTitle {
    color: $purple;
  }

  .paragraph {
    color: $purple;
  }

  .imageLeft {
    position: absolute;
    left: 0;
    top: 20%;
    width: 25%;
  }
}

// caratteristiche riguardo a componente description-animation
.scompari {
  display: none;
}
// transizione data al description-animation
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

.description-animation-contenitore {
  min-height: 200px;
}
</style>

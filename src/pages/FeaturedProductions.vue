<script>
import { store } from "../store";
export default {
  name: "FeaturedProductions",

  data() {
    return {
      cardProd: [
        {
          image: "src/assets/work1.png",
        },

        {
          image: "src/assets/work2.png",
        },

        {
          image: "src/assets/work3.png",
        },

        {
          image: "src/assets/work4.png",
        },
      ],
      store,
    };
  },
  mounted() {
    let descriptionproductions = document.querySelector(
      ".descrizione-features"
    );
    // Chiamata alla funzione all'interno dell'oggetto
    store.transformElement(descriptionproductions);

    let cardimage = document.querySelectorAll(".image");

    for (let i = 0; i < this.cardProd.length; i++) {
      store.transformElement(cardimage[i]);
    }
  },
};
</script>

<template>
  <div class="wrap">
    <div class="descrizione-features" style="min-height: 120px">
      <p class="label">Our Works</p>
      <h1 class="mainTitle">Featured Productions</h1>
      <p class="paragraph">
        Here's just a small sample of some of those projects that we're quite
        proud of. If you're looking for something specific feel free to get in
        contact with us.
      </p>
    </div>
    <div class="container" style="min-height: 900px">
      <div class="row gy-5">
        <div v-for="card in cardProd" class="col-12 col-md-6 image my-4">
          <div class="random">
            <div class="btn-play">
              <i class="fa-solid fa-circle-play" style="color: #fff"></i>
            </div>
          </div>
          <img :src="card.image" alt="" />
        </div>
      </div>
    </div>

    <div class="container my-2">
      <div class="row">
        <div class="col-12">
          <button>
            <small><a href="#">See Our Work</a></small>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.image {
  position: relative;
  .btn-play {
    i {
      background-color: $orange;
      border-radius: 50%;
    }
  }
}

img {
  width: 100%;
  position: relative;
}
.box {
  background-color: red;
  width: 100px;
  height: 100px;
}

.wrap {
  min-height: 500px;
  text-align: center;

  div {
    margin: 0 auto;

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
  }

  .cardContainer {
    @include flex;
    flex-wrap: wrap;
    gap: 5px;
    .image {
      width: calc(100% / 2 - 5px);
      position: relative;
      img {
        width: 100%;
      }
      .btn-play {
        position: absolute;
        top: 40%;
        left: 25%;
        i {
          font-size: 3rem;
          background-color: $orange;
          border-radius: 50%;
        }
      }
    }
  }
}

button {
  border: none;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid $lightGray;
  font-weight: bold;

  &:hover {
    background-color: $lightGray;
  }

  a {
    color: black;
  }
}

// caratteristiche riguardo a componente descrizione-features
.scompari {
  display: none;
}
// transizione data al image
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: $duration;
  // position: relative;
}

@keyframes comparsa {
  0% {
    transform: translateY(-35px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

// caratteristiche over su immagini
.image:hover {
  // incliinazione lungo l'asse delle y
  transform: skewY(5deg);
}

image {
  width: 100%;
  height: 100vh;
  position: relative;
}
.random {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(227, 228, 237);
  width: 0%;
  height: 0%;
  background: rgba(56, 53, 196, 0.25);
  text-align: center;
  transition: all 0.5s;
  z-index: 9;
  border-radius: 20px;
}

/* Aggiungi una regola CSS quando l'utente fa l'hover sull'elemento */
.image:hover .random {
  height: 100%;
  width: 96.5%; /* Cambia la larghezza a 100% durante l'hover */
}

.random .btn-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
}
</style>

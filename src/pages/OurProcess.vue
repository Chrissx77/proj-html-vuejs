<script>
export default {
  name: "OurProcess",
  data() {
    return {
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
    };
  },
};
</script>

<template>
  <div class="wrap">
    <div class="image">
      <img src="../assets/process-thumb.png" alt="" />
    </div>
    <div class="text">
      <p class="label">Our Process</p>
      <h1 class="mainTitle">Our Process for Your Animation Production</h1>
      <p class="paragraph">
        We have an effective process for working on animation
      </p>
      <div>
        <div class="cardsContainer">
          <div class="card" v-for="card in cardProcess">
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
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.wrap {
  padding: 10% 0;
  @include flex;
  @include contain;
  gap: 50px;
  min-height: 500px;

  .image {
    img {
      width: 700px;
      &:hover {
        animation: fly1 3s;
      }
    }
  }

  @keyframes fly1 {
    0% {
      transform: translateX(0px);
    }

    50% {
      transform: translateX(+15px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .text {
    width: 30%;
    @include flex;
    flex-direction: column;
    justify-content: center;

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

    .cardsContainer {
      gap: 5%;
      @include flex;
      .card {
        border-radius: 10px;
        border: 1px solid $lightGray;
        div {
          padding: 5px 0;
        }
        padding: 30px;
        @include flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

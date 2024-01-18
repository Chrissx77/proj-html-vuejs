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

<!-- <p class="label">Our Process</p>
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
        </div> -->

<template>
  <div class="container my-5">
    <div class="row gy-5">
      <div class="col-12 col-md-6 imageRocketWomen">
        <div class="rocketWomen">
          <img src="../assets/process-thumb.png" alt="" srcset="" />
        </div>
      </div>

      <div class="text col-12 col-md-6">
        <p class="label">Our Process</p>
        <h1 class="mainTitle">Our Process for Your Animation Production</h1>
        <p class="paragraph">
          We have an effective process for working on animation
        </p>

        <div class="container">
          <div class="row cardsContainer">
            <div
              class=" cardBox col-12 col-md-6 " v-for="card in cardProcess">
              <div class="card">
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

@media screen and (max-width: 600px) {
  .imageRocketWomen {
    order: 5;
  }

  .cardBox {
    order: 1;
    width: 60%;
    margin: 10px auto;
  }

  .cardsContainer{
    display: flex;
    justify-content: center;
    align-items: center;

  }
}


.cardBox {
  text-align: center;
  margin: 20px;
}
</style>

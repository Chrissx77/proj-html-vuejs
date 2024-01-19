<script>
export default {
  name: "Jumbotrone",
};
</script>

<template>
  <section class="hero">
    <div class="wrap">
      <p class="label">Image, Create, Experience</p>
      <h1 class="mainTitle">We Animate With Ninja-Like Precision</h1>
      <p class="paragraph">
        We are a character-driven animation studio striving to make high-quality
        animations
      </p>
      <button class="btn-project">Start a Project</button>
      <button class="btn-portfolio">Portfolio</button>
      <div class="thumb">
        <div>
          <img src="../assets/middle.png" alt="" />
          <a href="" class="play-tag">
            <i class="fa-solid fa-circle-play" style="color: #a616ea"></i>
          </a>
          <!-- crearo il secondo tag i cosi che faccia da sfondo fisso -->
          <a href="" class="play-tag-riflesso">
            <i class="fa-solid fa-circle-play" style="color: #a616ea"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Sezione Immagini Jumbo -->
    <div class="starsLeft">
      <img src="../assets/dots-left.png" alt="" srcset="" />
    </div>

    <div class="starsRight">
      <img src="../assets/dots-right.png" alt="" srcset="" />
    </div>

    <div class="imageAstroneer">
      <img src="../assets/left-man.png" alt="" srcset="" />
    </div>

    <div class="imageAstroneerPC">
      <img src="../assets/right-man.png" alt="" srcset="" />
    </div>

    <div class="planet">
      <img src="../assets/globe1.png" alt="" srcset="" />
    </div>

    <div class="moon">
      <img src="../assets/globe2.png" alt="" srcset="" />
    </div>

    <div class="alien">
      <img src="../assets/light.png" alt="" srcset="" />
    </div>

    <div class="banner">
      <img src="../assets/bottom-shape.png" alt="" srcset="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.hero {
  padding-top: 150px 0px;
  background-image: url("../assets/banner-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 700px;
  color: white;
  @include flex;
  align-items: center;
  position: relative;

  .banner {
    position: absolute;
    bottom: 0;
    img {
      width: 100%;
    }
  }

  .wrap {
    width: 40%;
    margin: 0 auto;
    text-align: center;
    position: relative;

    .label {
      color: $orange;
      font-size: 1.3rem;
    }

    h1 {
      font-size: 4rem;
    }

    .paragraph {
      padding: 10px 0;
    }

    button {
      border: 1px solid $white;
      border-radius: 15px;
      margin: 0 20px;
      padding: 4px 15px;
      font-weight: bold;
      background-color: transparent;
      color: white;
      box-shadow: 0px 3px 70px 0px white;
      &:hover {
        background-color: $white;
        color: black;
      }
    }

    .thumb {
      z-index: 90;
      position: absolute;
      div {
        position: relative;
        img {
          padding: 50px 0;
          width: 100%;
        }
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          background-color: white;
          border-radius: 50%;
        }
      }
    }
  }

  .imageAstroneer {
    position: absolute;
    left: 5%;
    bottom: 10%;
    z-index: 1;
    animation: fly1 3s linear infinite;
    animation-delay: 0.5s;
    img {
      width: 200px;
    }
  }

  .imageAstroneerPC {
    position: absolute;
    right: 5%;
    bottom: 10%;
    animation: fly1 4s linear infinite;
    animation-delay: 0.5s;
    img {
      width: 200px;
    }
  }

  .starsLeft {
    position: absolute;
    left: 0;
    bottom: 10%;
  }

  .starsRight {
    position: absolute;
    right: 0;
    bottom: 10%;
  }

  .planet {
    position: absolute;
    top: 20%;
    left: 8%;
    animation: globe1 4s linear infinite;
    animation-delay: 0.2s;
    img {
      width: 130px;
    }
  }

  .moon {
    position: absolute;
    right: 25%;
    top: 30%;
    animation: globe1 4s linear infinite;
    animation-delay: 0.2s;
    img {
      width: 80px;
    }
  }

  .alien {
    position: absolute;
    right: 5%;
    top: 5%;
    animation-delay: 0.3s;
    animation: lightopen 2s linear infinite;
    img {
      width: 80px;
    }
  }

  // animazione display play
  .play-tag {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #a616ea;
    animation: impulso 1.1s linear infinite, impulso 1.2s linear infinite;
    animation-delay: 0.4s;
  }

  .play-tag-riflesso {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>

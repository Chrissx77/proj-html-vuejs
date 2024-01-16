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
        We are a character-driven animation studio striving to make high-quality animations
      </p>
      <button class="btn-project">Start a Project</button>
      <button class="btn-portfolio">Portfolio</button>
    </div>

    <div class="starsLeft">
      <img src="../assets/dots-left.png" alt="" srcset="">
    </div>

    <div class="starsRight">
      <img src="../assets/dots-right.png" alt="" srcset="">
    </div>

    <div class="imageAstroneer">
      <img src="../assets/left-man.png" alt="" srcset="">
    </div>

    <div class="imageAstroneerPC">
      <img src="../assets/right-man.png" alt="" srcset="">
    </div>

    <div class="planet">
      <img src="../assets/globe1.png" alt="" srcset="">
    </div>

    <div class="moon">
      <img src="../assets/globe2.png" alt="" srcset="">
    </div>

    <div class="alien">
      <img src="../assets/light.png" alt="" srcset="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.hero {
  background-image: url("../assets/banner-bg.png");
  min-height: 700px;
  color: white;
  background-position: center;
  @include flex;
  align-items: center;
  position: relative;

  .wrap{
    width: 40%;
    margin: 0 auto;
    text-align: center;

    .label{
      color: $orange;
      font-size: 1.3rem;
    }

    h1{
      font-size: 4rem;
    }

    .paragraph{
      padding: 10px 0;
    }

    button{
      border: 1px solid $white;
      border-radius: 15px;
      margin: 0 20px;
      padding:4px 15px;
      font-weight:bold;
      background-color: transparent;
      color: white;
      box-shadow: 0px 3px 70px 0px white;
      &:hover{
        background-color: $white;
        color: black;
      }
    }
  }

  .imageAstroneer{
    position: absolute;
    left: 5%;
    bottom: 10%;
    img{
      width: 200px;
    }
  }

  .imageAstroneerPC{
    position: absolute;
    right: 5%;
    bottom: 10%;
    img{
      width: 200px;
    }
  }

  .starsLeft{
    position: absolute;
    left: 0;
    bottom: 10%;
  }

  .starsRight{
    position: absolute;
    right: 0;
    bottom: 10%;
  }

  .planet{
    position: absolute;
    top: 20%;
    left: 8%;
    img{
      width: 130px;
    }
  }

  .moon{
    position: absolute;
    right: 25%;
    top:30%;

    img{
      width: 80px;
    }
  }

  .alien{
    position: absolute;
    right: 5%;
    top:5%;

    img{
      width: 80px;
    }
  }
}
</style>

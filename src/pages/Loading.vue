<!-- Componente di Loading -->
<script>
export default {
  name: "Loading",
};
</script>

<template>
  <div id="loading">
    <img
      class="img"
      src="../assets/rocket-banner.png"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

#loading {
  //Imposto il componente in modo che prenda tutto il ViewPort
  position: fixed;
  z-index: 1000;
  background-image: url("../assets/preloader.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  @include flex;
  justify-content: center;
  align-items: center;
  //Animazione rocketMan
  .img {
    animation: prelo 8s linear infinite;
    animation-delay: 0.5s;
  }
}


//Sezione KeyFrames
@keyframes prelo{
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateX(10vh);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>

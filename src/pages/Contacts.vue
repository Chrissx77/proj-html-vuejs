<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <div class="cont_titles">
    <h5>Contact Us</h5>
    <h1>How to Reach Us</h1>
    <p>We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
  </div>

  <div class="big_cont">

    <!-- <div class="shape-">
      <img src="../assets/shape-top.png" alt="##">
    </div>



    <div class="shape-">
      <img src="../assets/shape-bottom.png" alt="##">
    </div> -->

  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// stili contenitore titoli
.cont_titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  position: relative;
  height: 100%;
}

.shape- img{
  width: 100%;
}
.cont_titles h5{
  color: $blue;
}
.cont_titles h1{
  color: $darkPurple;
}
.cont_titles p{
  color: $darkPurple;
}
.cont_titles p, h1, h5{
  margin: 10px 0;
}

// stile contenitore grande rosa

.big_cont{
  margin: 0 auto;
  width: 85%;
  height: 800px;
  background-color: #ECE4FC;
}
</style>

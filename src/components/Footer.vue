<script>
export default {
  name: "Footer",
};
</script>

<template>
   <div class="footer">
    <div class="content">
      <div class="shape-top">
        <img src="../assets/shape-top.png" alt="##">
      </div>
      <div class="content__text">
        <h6 class="text__title">We Create New Worlds!</h6>
        <h3 class="text__title">Want Tips On Your Storytelling?</h3>
        <p class="text__description">Join our newsletter for tips on how to elevate your brand through storytelling.</p>
        <form class="text__form">
          <div class="contenitore_serch">
            <input type="email" placeholder="Enter Your Email" required>
            <button type="submit"><b>submit</b></button>
          </div>
        </form>
      </div>
      <div class="shape-bottom">
        <img src="../assets/shape-bottom.png" alt="##">
      </div>
      <div class="content__logo">
        <img src="../assets/footer-logo.png" alt="ANIDIO logo">
      </div>
      <div class="menu">
        <ul class="menu__list">
          <li class="list__item"><a href="#">About Us</a></li>
          <li class="list__item"><a href="#">Portfolio</a></li>
          <li class="list__item"><a href="#">Pricing</a></li>
          <li class="list__item"><a href="#">Career</a></li>
          <li class="list__item"><a href="#">Contact</a></li>
        </ul>
        <div class="menu__social">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        
      </div>
    </div>
    <div class="bottom">
      <p class=" mt-3">Copyright © 2022 <a href="#">Softvirus</a>. Tutti i diritti riservati.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.menu__list{
  list-style-type: 0;
}
// stili generali contenitore viola e del suo interno
.content__text{
  background-image: url(../assets/counter-bg.png);
  background-size: cover;
  color: $white;
  text-align: center;
  
}
.content__text h3{
  width: 350px;
  margin: 0 auto;
  padding: 15px;
  font-size: 40px;
}

.content__text h6{
  color: #FF7A36;
}

// stili bottoni

.contenitore_serch {
  border-radius: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  width: 500px;
  margin: 0 auto;
  padding: 5px;
}

.contenitore_serch b {
  font-weight: 480;
  padding: 15px;
}

.contenitore_serch input{
  width: 70%;
  height: 100%;
}
.text__form button, input{
  border-radius: 20px;
  padding: 5px;
  border: none;
  outline: none;
}

.text__form{
  margin-bottom: 60px;
}

.text__form button{
  background-color: #FFDFED;
}
</style>


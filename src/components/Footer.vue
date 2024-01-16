<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="footer">
    <div class="content">
      <div class="content__text">
        <h3 class="text__title">Want Tips On Your Storytelling?</h3>
        <p class="text__description">Join our newsletter for tips on how to elevate your brand through storytelling.</p>
        <form class="text__form">
          <input type="email" placeholder="Enter your email" required>
          <button type="submit">Submit</button>
        </form>
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
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="text-center mt-3">Copyright © 2022 <a href="#">Softvirus</a>. Tutti i diritti riservati.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;
</style>

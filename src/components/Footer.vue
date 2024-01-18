<script>
import { store } from "../store";
export default {
  name: "Footer",
  data() {
    return {
      store,
    };
  },
  mounted() {
    // elemento presi dentro al documento
    // let containertips = document.querySelector(".containertips");

    // store.transformElement(containertips);
  },
};
</script>

<template>
  <div class="footer">
    <div class="content">
      <div class="content__text">
        <div class="shape-img">
          <img src="../assets/shape-top.png" alt="##" />
        </div>

        <div class="wrap-container">
          <div class="containertips">
            <h6 class="text__title">We Create New Worlds!</h6>
            <h3 class="text__title">Want Tips On Your Storytelling?</h3>
            <p class="text__description">
              Join our newsletter for tips on how to elevate your brand through
              storytelling.
            </p>
          </div>

          <form class="text__form">
            <div class="contenitore_serch">
              <input type="email" placeholder="Enter Your Email" required />
              <button type="submit"><b>submit</b></button>
            </div>
          </form>
        </div>

        <div class="shape-img">
          <img src="../assets/shape-bottom.png" alt="##" />
        </div>
      </div>

      <div class="cont_footer_top">
        <div class="content__logo">
          <img src="../assets/footer-logo.png" alt="ANIDIO logo" />
        </div>

        <div class="contenitore_pulsanti">
          <ul class="list_style">
            <li class="list__item"><a href="#">About Us</a></li>
            <li class="list__item"><a href="#">Portfolio</a></li>
            <li class="list__item"><a href="#">Pricing</a></li>
            <li class="list__item"><a href="#">Career</a></li>
            <li class="list__item"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div class="style_hr">
        <hr />
      </div>

      <div class="cont_footer_bottom">
        <div class="Copyright">
          <p class="mt-3">
            Copyright © 2022 <a href="#">Softvirus</a>. Tutti i diritti
            riservati.
          </p>
        </div>

        <div class="menu">
          <div class="menu__social">
            <div><i class="fa-brands fa-facebook"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// stili generali contenitore viola e del suo interno
.menu__list {
  list-style-type: 0;
}
.content__text {
  background-image: url(../assets/counter-bg.png);
  background-size: cover;
  color: $white;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
}
.shape-img img {
  width: 100%;
}
.content__text h3 {
  width: 400px;
  margin: 0 auto;
  padding: 15px;
  font-size: 40px;
}

.content__text h6 {
  color: #ff7a36;
  margin-top: 60px;
  font-size: 19px;
}

.wrap-container p {
  font-size: 14px;
  padding-bottom: 8px;
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

.contenitore_inputserch {
  width: 70%;
  height: 100%;
}

input::placeholder {
  font-size: 13px;
}
.text__form button,
input {
  border-radius: 20px;
  padding: 5px;
  border: none;
  outline: none;
}

.text__form {
  margin-bottom: 60px;
}

.text__form button {
  background-color: $pink;
}

// stili navbar bottom (top)

.cont_footer_top {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 70px;
}

.list_style {
  display: flex;
  justify-content: space-between;
}

.list__item {
  align-items: center;
}

.list__item a {
  color: #000;
  font-weight: 500;
  font-size: 14px;
}
.list__item a:hover {
  color: blue;
  font-weight: 500;
}

.contenitore_pulsanti {
  width: 400px;
}
// mod hr
.style_hr {
  width: 80%;
  margin: 0 auto;
}

// stili navbar bottom

.cont_footer_bottom {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}

.menu__social {
  display: flex;
}

.menu__social div i {
  color: blueviolet;
}
.menu {
  display: flex;
  align-items: center;
}

.menu__social div {
  border-radius: 100%;
  border: 1px solid $lightGray;
  cursor: pointer;
  display: flex;
  padding: 5px;
  margin-inline: 5px;
  &:hover {
    background-color: $orange;
    i {
      color: $white;
    }
  }
}

// caratteristiche riguardo a componente descrizione-features
.scompari {
  display: none;
}
// transizione data al image
.transizione-scroll {
  animation-name: comparsa;
  animation-duration: 5s;
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
</style>

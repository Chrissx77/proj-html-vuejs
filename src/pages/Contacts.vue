<script>
// import loading
import Loading from "./Loading.vue";

export default {
  name: "Contacts",
  components: {
    Loading,
  },

  data() {
    return {
      isLoading: true,
      // array condentro informazioni
      cards: [
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process4.png",
          title: "Motion Graphics",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process5.png",
          title: "Character Design",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "src/assets/process1.png",
          title: "Storyboards",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process6.png",
          title: "Animatics",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "https://pixner.net/anidio/carton-agency/assets/img/process/process7.png",
          title: "Film and TV",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
        {
          img: "src/assets/process1.png",
          title: "Script writing",
          paragrafo:
            "The best in the business, served to your audience’s eyeballs.",
        },
      ],
    };
  },

  mounted() {
    // codice per scomparsa loading
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<template>
  <Loading v-if="isLoading" />
  <!-- header -->

  <!-- inizio prima sezione jumbotron -->
  <section class="jumbotron-bg position-relative d-flex">
    <div class="row">
      <!-- contenitore contenente cose in generale  -->
      <div class="col-12">
        <!-- inizio immagini usate per sfondo  -->
        <div class="globo-img1 position-absolute">
          <img src="../assets/globe1.png" alt="immagine pianeta" />
        </div>
        <div class="globo-img3 position-absolute">
          <img src="../assets/globe3.png" alt="immagine pianeta" />
        </div>
        <div class="globe-img2 position-absolute">
          <img
            src="../assets/globe2.png"
            alt="immagine pianeta"
            class="globo-img2"
          />
        </div>
        <!-- fine immagini usate per sfondo  -->
        <!-- inizio due contenitore dove ci saranno due sfondi e testo  -->
        <div class="container">
          <div class="row contenitore">
            <div class="col-6 jumbotron-left">
              <div class="position-absolute about-us">
                <h1>Contacts</h1>
                <div class="mt-4">
                  <a>
                    <router-link :to="{ name: 'home' }"> home </router-link>
                  </a>
                  <i class="fa-solid fa-arrow-right"></i>
                  <a href=""> Contacts</a>
                </div>
              </div>
              <img src="../assets/dots-right.png" alt="" />
            </div>
            <div class="col-6 jumbotron-right">
              <img src="../assets/dots-left.png" alt="" />
            </div>
          </div>
        </div>
        <!-- fine due contenitore dove ci saranno due sfondi e testo  -->
        <!-- inizio immagini usate per sfondo  -->
        <div class="light-img position-absolute">
          <img src="../assets/light.png" alt="" />
        </div>
        <div class="img-persona position-absolute">
          <img src="../assets/rocket-banner.png" alt="" />
        </div>
        <div class="onde position-absolute">
          <img src="../assets/bottom-shape.png" alt="" />
        </div>
        <!-- fine immagini usate per sfondo  -->
      </div>
    </div>
  </section>
  <LoveAnimation class="pt-0 pb-4" />

  <div class="cont_titles">
    <h5>Contact Us</h5>
    <h1>How to Reach Us</h1>
    <p>
      We're always interested in having a chat or discussing your next big
      project, so drop us a line!
    </p>
  </div>

  <div class="big_cont">
    <div class="shape-">
      <img src="../assets/shape-top.png" alt="##" />
    </div>

    <div class="conteiner_wrapper">
      <div class="container_left">
        <div class="contenitore_comp_scheda">
          <h1>Reach us directly!</h1>
          <div class="contenitore_schede">
            <div class="scheda">
              <div class="cont_loghi">
                <img src="../assets//map.png" alt="" />
              </div>
              <div class="estremi">
                <h5>Address</h5>
                <p>9464 Royal Ln. Mesa, New Jersey 45463</p>
              </div>
            </div>
          </div>

          <div class="contenitore_schede">
            <div class="scheda">
              <div class="cont_loghi">
                <img src="../assets//email.png" alt="" />
              </div>
              <div class="estremi">
                <h5>Email</h5>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="contenitore_schede">
            <div class="scheda">
              <div class="cont_loghi">
                <img src="../assets//phone.png" alt="" />
              </div>
              <div class="estremi">
                <h5>Phone:</h5>
                <p>[406] 555-0120</p>
              </div>
            </div>
          </div>
          <div class="mod_hr">
            <hr />
          </div>
          <h4>Follow us</h4>

          <div class="menu">
            <div class="menu__social">
              <div><i class="fa-brands fa-facebook"></i></div>
              <div><i class="fa-brands fa-instagram"></i></div>
              <div><i class="fa-brands fa-twitter"></i></div>
              <div><i class="fa-brands fa-whatsapp"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_right">
        <div class="wrapper_border">
          <div class="wrapper_right">
            <div class="wrapper_us">
              <h1>Contact form</h1>
              <p>Tell us your story and let's make it awesome</p>
            </div>

            <div>
              <div class="name">
                <p>NAME</p>
                <input type="text" placeholder="What's your name?" />
              </div>
              <div class="email">
                <p>EMAIL</p>
                <input type="email" placeholder="What's your email?" />
              </div>
              <div class="number">
                <p>PHONE</p>
                <input type="number" placeholder="your number?" />
              </div>
              <div class="message">
                <p>LEAVE A MESSAGE</p>
                <textarea
                  name="message"
                  id="message"
                  cols="10"
                  rows="5"
                  placeholder="Please type your message here..."
                ></textarea>
              </div>
            </div>
          </div>
          <div class="bottone">
            <button type="submit"><b>Request a quote</b></button>
          </div>
        </div>
      </div>
    </div>

    <div class="shape-">
      <img src="../assets/shape-bottom.png" alt="##" />
    </div>
  </div>

  <!-- creazione sezione (We’re Here to Help) -->

  <div class="menu-container-help">
    <div class="cont_titles">
      <h5>We're Here to Help</h5>
      <h1>Frequently Asked Questions</h1>
      <p>
        We're always interested in having a chat or discussing your next big
        project, so drop us a line!
      </p>
    </div>

    <div class="contenitore_dropdown">
      <h2>How do i know what kind of video i need?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>How long will it take to create an animation video?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>How long do you need for the video creation process?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>Will I take part in the creation process?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>What type / format of animated video can I order?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>What if I don't like what you deliver?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>Do you currently have career openings?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// stili header

// inizio sezione jumbotron
// caratteristiche sfondo jumbotron
.jumbotron-bg {
  background-image: url(../assets/banner-bg.png);
  background-size: cover;
  min-height: 400px;
  // caratteristiche tutte immagini dentro a sezione
  img {
    width: 100%;
  }
  // caratteristiche contenitore contenente due sfondi e testo
  .contenitore {
    @include contain;

    .jumbotron-left .about-us {
      top: 200px;
      color: $white;
      a {
        color: $white;
      }
    }
  }
  // caratteristiche e posizionamento di quasi tutte le immagini dentro alla sezione
  .onde {
    bottom: 0px;
    width: 100%;
  }

  .img-persona {
    width: 300px;
    top: 100px;
    right: 150px;
    animation: rocket 2s linear infinite;
    animation-delay: 0.3s;
  }
  .globo-img1 {
    top: 12%;
    left: 9%;
    width: 130px;
    height: 130px;
    animation: rotazione 4s linear infinite;
    animation-delay: 0.2s;
  }

  .globo-img3 {
    top: -18%;
    left: 33%;
    max-width: 300px;
    height: 300px;
  }

  .globe-img2 {
    top: 18%;
    right: 28%;
    width: 100px;
    height: 100px;
    animation: rotazione 4s linear infinite;
    animation-delay: 0.2s;
  }

  .light-img {
    right: 9%;
    top: 10%;
    z-index: 1;
    animation: light 2s linear infinite;
  }
}
// animazioni di immagini
@keyframes rotazione {
  0% {
    transform: rotate(360deg);
  }
}

@keyframes rocket {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateX(5px);
  }

  100% {
    transform: translateY(5px);
  }
}

@keyframes light {
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
// caratteristiche immagini al cambio pixel schermo
@media screen and (max-width: 991px) {
  .col-12 > .globo-img3,
  .img-persona {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  .col-12 > .light-img {
    display: none;
  }
}
// fine sezione jumbotron
// inizio sezione service
.service {
  @include contain;
  // colore del testo
  a,
  h2 {
    color: $darkPurple;
  }
  h5 {
    color: blue;
  }
}
// fine sezione service
// caratteristiche riguardo a componente descrizione
.scompari {
  display: none;
}
// transizione data al descizione
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

// creazione sezione style (We’re Here to Help)

.contenitore_dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contenitore_dropdown h2 {
  padding-right: 150px;
  font-size: 25px;
}
.contenitore_dropdown div {
  margin-right: 25px;
}

.container_plus {
  border: solid 1px #d2cbda;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  align-items: center;
  font-size: 25px;
}

.container_plus i {
  color: $blue;
}

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

.shape- img {
  width: 100%;
}
.cont_titles h5 {
  color: $blue;
}
.cont_titles h1 {
  color: $darkPurple;
}
.cont_titles p {
  color: $darkPurple;
}
.cont_titles p,
h1,
h5 {
  margin: 10px 0;
}

// stile contenitore grande rosa

.big_cont {
  margin: 0 auto;
  width: 85%;
  height: fit-content;
  background-color: #ebe5ff;
  position: relative;
}

.conteiner_wrapper {
  display: flex;
}
// stili sottocontenitore wrapper
.container_left {
  width: 50%;
  height: 50px;
  // background-color: blue;
}

.container_right {
  width: 50%;
  height: fit-content;
  // background-color: red;
}

// stili schede

.cont_loghi {
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  background-color: #ebe5ff;
  border-radius: 50%;
  margin-right: 15px;
}

.scheda {
  background-color: $white;
  width: 100%;
  padding: 7px;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.estremi,
h4 {
  color: $purple;
}

.estremi h5 {
  font-weight: 650;
}

.estremi p {
  font-weight: 550;
}

.contenitore_comp_scheda:first-child {
  margin-top: 150px;
  margin-left: 15px;
  width: 70%;
}

.mod_hr {
  padding-top: 18px;
}

// mod loghi social

.menu__social {
  display: flex;
}

.menu__social div i {
  color: $darkPurple;
}
.menu {
  display: flex;
  align-items: center;
}

.menu__social div {
  border-radius: 100%;
  border: 1px solid $darkPurple;
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

// stili input

.name input,
.email input,
.number input,
.message textarea {
  border-radius: 10px;
  height: 50px;
  width: 100%;
  border: solid 2px $lightGray;
  outline: none;
}

.number,
.email,
.message,
.name > p {
  font-weight: 700;
}

.message textarea {
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  border: solid 2px $lightGray;
  outline: none;
}

.name input,
.email input,
.number input {
  margin-bottom: 25px;
}

.wrapper_us {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 25px;
}

.wrapper_right {
  padding-inline: 15px;
}

.wrapper_border {
  border-radius: 30px;
  border: 1px solid $gray;
  margin-right: 10px;
  margin-top: 70px;
  margin-bottom: 15px;
  background-color: #f7f0fe;
}
// stile tasto

.bottone {
  padding: 10px;
  padding-top: 20px;
}

.bottone button {
  width: 100%;
  height: 50px;
  border-radius: 40px;
  border: none;
  background-color: $pink;
  &:hover {
    background-color: #fff;
    border: solid 3px $pink;
  }
}
</style>

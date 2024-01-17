<script>
export default {
  name: "Header",
  mounted() {
    // elementi presi dentro al documento
    let elemento = document.querySelector(".barra-ricerca");
    // // altezza elemento singolo dove si attiverà la transizione
    // evento
    window.addEventListener("scroll", function () {
      if (250 < window.scrollY) {
        elemento.classList.add("transizione-scroll");
      } else {
        elemento.classList.remove("transizione-scroll");
      }
    });
  },
};
</script>

<template>
  <!-- nav di ricerca per utente -->
  <div class="barra-ricerca">
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href=""
          ><img src="../assets/logo.png" alt=""
        /></a>
        <!-- bottone per fare drop down delle pagine disponibili -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="text-white"><i class="fa-solid fa-bars"></i></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end py-2 rounded"
          id="navbarNavDropdown"
        >
          <!-- ul per cambiare pagine  -->
          <ul class="navbar-nav p-2">
            <li class="nav-item my-1 ps-2">
              <a class="nav-link active" aria-current="page" href="">
                <router-link :to="{ name: 'home' }"> home </router-link>
              </a>
            </li>
            <li class="nav-item my-1 ps-2">
              <a class="nav-link active" aria-current="page" href="">
                <router-link :to="{ name: 'about' }"> about us </router-link>
              </a>
            </li>
            <li class="nav-item my-1 ps-2">
              <a class="nav-link" href="">
                <router-link :to="{ name: 'contacts' }"> contacts </router-link>
              </a>
            </li>
          </ul>
          <span id="citazione" class="ps-2">
            <a href=""> Get a Quote </a>
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
// caratteristiche contenitore dove c'è nav bar
.barra-ricerca {
  width: 100%;
  position: absolute;
  z-index: 100;
  background-color: transparent;
  // caratteristiche navbar
  nav {
    @include contain;

    a {
      color: $white;
    }
    // caratteristiche bottone citazioni
    #citazione {
      display: inline-block;
      a {
        color: black;
        padding: 5px;
        background-color: $pink;
        border-radius: 15px;
        border: 1px solid $white;
      }
    }
    // caratteristiche hover
    #citazione:hover a {
      background-color: $darkPurple;
      color: $white;
    }
  }
  // caratteristiche hover li dentro alla lista delle pagine
  li a:hover {
    color: $orange;
  }
}

// caratteristiche al cambiare della larghezza shermo
@media screen and (max-width: 991px) {
  #navbarNavDropdown {
    background-color: $darkPurple;

    li {
      border: 1px solid $white;
    }
  }

  #citazione {
    a {
      color: black;
      padding: 10px;
      background-color: $pink;
      border-radius: 25px;
    }
  }
}

// classe aggiunta a header
.transizione-scroll {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0px -31px 32px 9px #234dd4;
  background-color: rgb(38, 2, 98);
  animation-name: comparsa;
  animation-duration: 1s;
}
// animazione ggiunta alla classe header allo scroll
@keyframes comparsa {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

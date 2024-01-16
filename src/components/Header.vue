<script>
export default {
  name: "Header",
};
</script>

<template>
  <!-- nav di ricerca per utente -->
  <div class="barra-ricerca">
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
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
          class="collapse navbar-collapse justify-content-end py-2"
          id="navbarNavDropdown"
        >
          <!-- ul per cambiare pagine  -->
          <ul class="navbar-nav p-2">
            <li class="nav-item my-1 ps-2">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link :to="{ name: 'home' }"> home </router-link>
              </a>
            </li>
            <li class="nav-item my-1 ps-2">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link :to="{ name: 'about' }"> about </router-link>
              </a>
            </li>
            <li class="nav-item my-1 ps-2">
              <a class="nav-link" href="#">
                <router-link :to="{ name: 'contacts' }"> contacts </router-link>
              </a>
            </li>
          </ul>
          <span id="citazione">
            <a href="#"> Get a Quote </a>
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
  position: fixed;
  z-index: 100;
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
        padding: 5px;
        background-color: pink;
        border-radius: 15px;
        border: 1px solid white;
      }
    }
    // caratteristiche hover
    #citazione:hover a {
      background-color: #260458;
      color: white;
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
    background-color: #260458;

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
</style>

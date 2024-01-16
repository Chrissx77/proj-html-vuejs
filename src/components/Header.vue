<script>
export default {
  name: "Header",
};
</script>

<template>
  <div class="barra-ricerca">
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo.png" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
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
            <div id="citazione" class="nav-item my-1 ps-2 quote">
              <a href="#"> Get a Quote </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.barra-ricerca {
  width: 100%;
  position: fixed;
  z-index: 100;
  nav {
    @include contain;

    a {
      color: white;
    }

    .quote {
      display: none;
    }
  }
}

li a:hover {
  color: orange;
}

@media screen and (max-width: 991px) {
  ul {
    background-color: #260458;

    li {
      border: 1px solid white;
    }

    #citazione {
      display: inline-block;
      a {
        padding: 5px;
        background-color: pink;
        border-radius: 15px;
      }
    }
  }
}
</style>

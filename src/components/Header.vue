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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link :to="{ name: 'about' }"> about </router-link>
              </a>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#"> -->
              <a class="nav-link active" aria-current="page" href="#">
                <router-link :to="{ name: 'home' }"> home </router-link>
              </a>
              <!-- </a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link :to="{ name: 'contacts' }"> contacts </router-link>
              </a>
            </li>
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
  nav {
    @include contain;

    a {
      color: black;
    }
  }
}
</style>

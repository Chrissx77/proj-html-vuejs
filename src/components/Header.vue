<script>
export default {
  name: "Header",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
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

  <!-- <nav class="navbar navbar-expand-sm navbar-light bg-light p-1 ">
        <a class="navbar-brand text-danger" href="#"><img src="../assets/logo.png" alt=""></a>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form >
              <ul class="d-flex ">
                <li class="mx-1">
                  <a class="nav-link active" aria-current="page" href="#">
                     <router-link :to="{ name: 'home' }">
                        home
                      </router-link>
                    </a>
                </li>
                <li class="mx-1">
                  <a class="nav-link" href="#">
                    <router-link :to="{ name: 'about' }">
                     about
                    </router-link>
                   </a>
                </li>
                <li class="mx-1">
                  <a class="nav-link " href="#" >
                     <router-link :to="{ name: 'contacts' }">
                    contacts
                    </router-link>
                   </a>                   
                </li>
              </ul>
              
            </form>
        </div>
    </nav> -->
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

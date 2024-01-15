<script>
export default {
  name: "Header",
};
</script>

<template>
  <nav>
    <h1>HEADER</h1>
    <ul>
      <li >
        <router-link :to="{ name: 'home' }">
            home
        </router-link>
      </li>

      <li >
        <router-link :to="{ name: 'about' }">
            about
        </router-link>
      </li>

      <li >
        <router-link :to="{ name: 'contacts' }">
            contacts
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
</style>

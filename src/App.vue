<template>
  <nav class="flex justify-center gap-5 p-5">
    <router-link to="/">Users</router-link>
    <router-link to="/products">Products</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>
nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

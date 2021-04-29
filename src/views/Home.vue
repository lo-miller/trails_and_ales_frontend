<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p><router-link to="/hikes">Hikes</router-link></p>
    <p><router-link to="/breweries">Breweries</router-link></p>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  methods: {},
};
</script>
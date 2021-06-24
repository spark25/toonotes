<template>
  <div class="app-container mx-auto">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Source+Code+Pro:wght@700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  /* outline: 2px solid red; */
}

body,
h1,
p {
  margin: 0;
  padding: 0;
}
.app-container {
  max-width: 640px;
  font-family: "Rubik", sans-serif;
  color: #fff;
}
</style>
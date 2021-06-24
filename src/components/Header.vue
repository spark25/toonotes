<template>
  <header class="h-14 px-2 py-2">
    <router-link to="/">
      <div class="brand text-notblack">
        too<span class="text-primary-400">/</span>notes
      </div>
    </router-link>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  .brand {
    font-family: "Source Code Pro", monospace;
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
}
</style>
<template>
  <main class="main">
    <SideBar />
    <ProductPage />
  </main>
</template>

<script setup>
import SideBar from "./SideBar.vue";
import ProductPage from "./ProductPage.vue";
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  margin: 0 auto;
  column-gap: 40px;
}
</style>

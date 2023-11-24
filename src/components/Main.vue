<template>
  <main class="main">
    <SideBar />
  </main>
</template>

<script setup>
  import SideBar from './SideBar.vue';
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  margin: 0 auto;
}
</style>

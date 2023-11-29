<template>
  <main class="main">
    <SideBar />
    <ProductPage
      :isVisiblePopup="isVisiblePopup"
      :setPopupVisible="setPopupVisible"
    />
  </main>
</template>

<script setup>
import SideBar from "./SideBar.vue";
import ProductPage from "./ProductPage.vue";

const props = defineProps({
  isVisiblePopup: {
    type: Boolean,
    required: true,
  },
  setPopupVisible: {
    type: Function,
    required: true,
  },
});
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

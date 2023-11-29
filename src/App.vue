<template>
  <Header />
  <Navigation />
  <Main :isVisiblePopup="isVisiblePopup" :setPopupVisible="setPopupVisible" />
  <Popup :isVisiblePopup="isVisiblePopup" :setPopupVisible="setPopupVisible" />
</template>

<script setup>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Main from "./components/Main.vue";
import Popup from "./components/Popup.vue";
let isVisiblePopup = false;

function setPopupVisible(value) {
  isVisiblePopup = value;
}
</script>

<style scoped></style>

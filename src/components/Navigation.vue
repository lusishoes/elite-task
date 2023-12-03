<template>
  <div class="navigation">
    <div class="navigation__container">
      <p class="navigation__text">Главная</p>
      <img
        src="../images/icons/right-arrow.svg"
        alt="right-arrow"
        class="navigation__arrow"
      />
      <p class="navigation__text">Каталог</p>
      <img
        src="../images/icons/right-arrow.svg"
        alt="right-arrow"
        class="navigation__arrow"
      />
      <p class="navigation__text">Мясо. Птица. Фарш</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-self: flex-start;
  margin: 30px auto;
  max-width: 1280px;
}

.navigation__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 315px;
}

.navigation__text {
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
}
</style>

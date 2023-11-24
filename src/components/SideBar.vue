<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <p class="sidebar-container__text">Бренд</p>
      <img
        class="sidebar-container__img"
        alt="arrow"
        src="../images/icons/arrow down.svg"
      />
    </div>
    <div class="sidebar-block">
      <div class="sidebar-container">
        <p class="sidebar-container__text">Направления меню</p>
        <img
          class="sidebar-container__img"
          alt="arrow"
          src="../images/icons/arrow up.svg"
        />
      </div>
      <div class="sidebar-choisen-items">
        <div class="sidebar-choisen-items__item">
          <img
            class="sidebar-choisen-items__item-img"
            alt="round"
            src="../images/icons/round.svg"
          />
          <p class="sidebar-choisen-items__item-text">Банкетное меню</p>
        </div>
        <div class="sidebar-choisen-items__item">
          <img
            class="sidebar-choisen-items__item-img"
            alt="round"
            src="../images/icons/round-choisen.svg"
          />
          <p class="sidebar-choisen-items__item-text">Бургеры</p>
        </div>
        <div class="sidebar-choisen-items__item">
          <img
            class="sidebar-choisen-items__item-img"
            alt="round"
            src="../images/icons/round.svg"
          />
          <p class="sidebar-choisen-items__item-text">Денер, шаурма, хот-дог</p>
        </div>
        <div class="sidebar-choisen-items__item">
          <img
            class="sidebar-choisen-items__item-img"
            alt="round"
            src="../images/icons/round.svg"
          />
          <p class="sidebar-choisen-items__item-text">Закуски для бара</p>
        </div>
        <div class="sidebar-choisen-items__item">
          <img
            class="sidebar-choisen-items__item-img"
            alt="round"
            src="../images/icons/round.svg"
          />
          <p class="sidebar-choisen-items__item-text">Итальянская кухня</p>
        </div>
        <div class="sidebar-choisen-items__item">
          <img
            class="sidebar-choisen-items__item-img"
            alt="round"
            src="../images/icons/round.svg"
          />
          <p class="sidebar-choisen-items__item-text">Итальянская кухня</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 220px;
  row-gap: 30px;
}

.sidebar-container__text {
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0c0c0d;
}

.sidebar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar-choisen-items {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  row-gap: 14px;
}

.sidebar-choisen-items__item {
  display: flex;
  flex-direction: row;
}

.sidebar-choisen-items__item-text {
  margin: 0;
  margin-left: 8px;
}
</style>

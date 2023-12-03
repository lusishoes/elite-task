<template>
  <header class="header">
    <div class="header-container">
      <img src="../images/logo.svg" alt="logo" class="header__logo" />
      <div class="header__catalog">
        <img
          src="../images/icons/header-dots.svg"
          class="header__catalog-dots"
          alt="dots"
        />
        <p class="header__catalog-text">Каталог</p>
      </div>
      <form class="header__form">
        <input
          name="header_form-search_input"
          class="header__form-search_input"
          type="text"
          placeholder="Поиск по товарам"
        />
        <img src="../images/icons/lupa.svg" class="header__form-lupa" />
      </form>
      <ul class="header__search-bar">
        <li class="header__search-bar_item">
          <img
            src="../images/icons/user.svg"
            alt="user"
            class="header__search-bar_item-img"
          />
          <p class="header__search-bar_item-text">Войти</p>
        </li>
        <li class="header__search-bar_item">
          <img
            src="../images/icons/shop.svg"
            alt="user"
            class="header__search-bar_item-img"
          />
          <p class="header__search-bar_item-text">Заказы</p>
        </li>
        <li class="header__search-bar_item">
          <div class="header__search-bar-count_items">2</div>
          <img
            src="../images/icons/like.svg"
            alt="user"
            class="header__search-bar_item-img"
          />
          <p class="header__search-bar_item-text">Избранное</p>
        </li>
        <li class="header__search-bar_item">
          <div
            class="header__search-bar-count_items"
            v-if="ItemStore.countCartItems() > 0"
          >
            {{ ItemStore.countCartItems() }}
          </div>
          <img
            src="../images/icons/cart.svg"
            alt="user"
            class="header__search-bar_item-img"
          />
          <p class="header__search-bar_item-text">Корзина</p>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useItemStore } from "../stores/ItemsStore";

const ItemStore = useItemStore();
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 2px 18px 0px rgba(12, 12, 13, 0.1);
}

.header-container {
  max-width: 1280px;
  padding: 26px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
}

.header__catalog {
  background-color: #f3223c;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 38px 16px;
  z-index: 3;
  height: 42px;
  padding: 0 12px;
  border-radius: 9px;
  margin-left: 58px;
  cursor: pointer;
}
.header__catalog-text {
  margin: 0;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 18px */
  color: #fff;
  margin-left: 12px;
  z-index: 4;
}

.header__form {
  display: flex;
  align-items: center;
}

.header__form-search_input {
  position: relative;
  border-radius: 0px 9px 9px 0px;
  background-color: rgba(93, 136, 150, 0.08);
  color: #858585;
  font-weight: 400;
  line-height: 120%;
  font-size: 15px;
  font-style: normal;
  padding: 12px 20px;
  border: none;
  width: 526px;
  left: -11px;
  outline: none;
  z-index: 2;
}

.header__form-lupa {
  position: relative;
  left: -49px;
}

.header__search-bar {
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding-left: 0;
  margin-left: 44px;
}

.header__search-bar_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: 30px;
  cursor: pointer;
}

.header__search-bar_item:first-of-type {
  margin-left: 0;
}

.header__search-bar_item-text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #0c0c0d;
  margin-top: 4px;
}

.header__search-bar-count_items {
  border-radius: 44px;
  width: 22px;
  height: 16px;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #fff;
  position: absolute;
  background-color: #f3223c;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 2px;
  top: -3px;
}
</style>

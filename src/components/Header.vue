<template>
  <header class="header">
    <div class="header-container">
    <img 
      src="../images/logo.svg"
      alt="logo"
      class="header-logo"
    />
    <div class="header__catalog">
      <img 
        src="../images/icons/header-dots.svg"
        class="header__catalog-dots"
        alt="dots"
      />
      <p class="header__catalog-text">Каталог</p>
    </div>
    <form class="header_form">
      <input 
        name="header_form-search_input"
        class="header_form-search_input"
        type="text"
        placeholder="Поиск по товарам"
      />
      <img 
        src="../images/icons/lupa.svg"
        class="header_form-lupa"
      />
    </form>
    <ul class="header_search-bar">
      <li class="header_search-bar_item">
        <img 
          src="../images/icons/user.svg"
          alt="user"
          class="header_search-bar_item-img"
        />
        <p class="header_search-bar_item-text">Войти</p>
      </li>
      <li class="header_search-bar_item">
        <img 
          src="../images/icons/shop.svg"
          alt="user"
          class="header_search-bar_item-img"
        />
        <p class="header_search-bar_item-text">Заказы</p>
      </li>
      <li class="header_search-bar_item">
        <div class="header_search-bar-count_items">2</div>
        <img 
          src="../images/icons/like.svg"
          alt="user"
          class="header_search-bar_item-img"
        />
        <p class="header_search-bar_item-text">Избранное</p>
      </li>
      <li class="header_search-bar_item">
        <div class="header_search-bar-count_items">22</div>
        <img 
          src="../images/icons/cart.svg"
          alt="user"
          class="header_search-bar_item-img"
        />
        <p class="header_search-bar_item-text">Корзина</p>
      </li>
    </ul>
  </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
 @import url(../assets/header.scss);
</style>

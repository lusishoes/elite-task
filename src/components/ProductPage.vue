<template>
  <div class="products">
    <div class="products-page">
      <div class="products-page__title">
        <h1 class="products-page__text">Мясо. Птица. Фарш</h1>
        <p class="products-page__count">60 товаров</p>
      </div>
      <div class="products-page__range">
        <p class="products-page__title-rate">Сначала популярные</p>
        <img
          class="products-page__rate-img"
          alt="arrow"
          src="../images/icons/arrow down.svg"
        />
      </div>
    </div>
    <div class="products-page__categories-list">
      <SelectorItem
        v-for="el of elementChosen.category"
        :key="el.id"
        :el="el"
      />
    </div>
    <div class="products-page__chosen-categories-list">
      <SelectedElement
        v-for="el of elementChosen.chosenCategory"
        :key="el.id"
        :el="el"
      />
    </div>
    <div class="products-page__items-list">
      <GoodsElement
        v-for="product of ItemStore.products"
        :key="product.id"
        :price="product.price"
        :name="product.name"
        :hit="product.hit"
        :latest="product.latest"
        :freeze="product.freeze"
        :img="product.img"
        :product="product"
        :isBonus="product.isBonus"
        :isAddToCard="product.isAddToCard"
      />
    </div>
    <!-- <div class="goods-loader"> -->
    <div class="products-page__loader-btn">Загрузить еще</div>
    <div class="products__pages">
      <div class="products__loader-pages">
        <p class="products__loader-page-choisen">1</p>
        <p class="products__loader-page">2</p>
        <p class="products__loader-page">3</p>
      </div>
      <div class="products__loader-next-page">
        <p class="products__loader-next-page-text">Дальше</p>
        <img
          class="products-page__rate-img"
          alt="arrow"
          src="../images/icons/right-arrow.svg"
        />
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup>
import SelectorItem from "./SelectorItem.vue";
import { useElementChosen } from "../stores/elementChosenStore";
import { useItemStore } from "../stores/ItemsStore";
import SelectedElement from "./SelectedElement.vue";
import GoodsElement from "./GoodsElement.vue";
const elementChosen = useElementChosen();
const ItemStore = useItemStore();
</script>

<style scoped>
.products__pages {
  display: flex;
  flex-direction: row;
  column-gap: 25px;
  margin-left: 481px;
  margin-bottom: 76px;
}

.products__loader-next-page-text {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  color: #858585;
  margin: 0;
}

.products__loader-next-page {
  display: flex;
  flex-direction: row;
  column-gap: 14px;
  align-items: center;
  justify-content: center;
}
.products__loader-page-choisen {
  color: #0c0c0d;
  margin: 0;
}

.products__loader-page {
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #858585;
  margin: 0;
}

.products__loader-pages {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
}

/* .goods-loader {
  
} */

.products-page__loader-btn {
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  border-radius: 9px;
  background: #f3223c;
  width: 181px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  margin: 44px auto 20px;
}
.products {
  width: calc(100% - 220px);
  display: flex;
  flex-direction: column;
}
.products-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 43px;
}
.products-page__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-items: flex-end;
  width: 414px;
}

.products-page__text {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  color: #0c0c0d;
  margin: 0;
}

.products-page__count {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  color: #858585;
  margin: 0;
}

.products-page__range {
  display: flex;
  flex-direction: row;
  width: 166px;
  align-items: center;
}

.products-page__title-rate {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: rgba(12, 12, 13, 0.8);
  margin: 0;
}

.products-page__rate-img {
  align-self: center;
  margin-left: 8px;
}

.products-page__categories-list {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  row-gap: 10px;
  column-gap: 10px;
  flex-wrap: wrap;
}

.products-page__chosen-categories-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  margin-top: 10px;
}

.products-page__items-list {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
}
</style>

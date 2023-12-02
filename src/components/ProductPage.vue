<template>
  <div class="products-title">
    <div class="items-page">
      <div class="items-title">
        <h1 class="item-title-text">Мясо. Птица. Фарш</h1>
        <p class="item-title-count">60 товаров</p>
      </div>
      <div class="items-range">
        <p class="item-title-rate">Сначала популярные</p>
        <img
          class="item-title-rate__img"
          alt="arrow"
          src="../images/icons/arrow down.svg"
        />
      </div>
    </div>
    <div class="categories-list">
      <SelectorItem
        v-for="el of elementChosen.category"
        :key="el.id"
        :el="el"
      />
    </div>
    <div class="chosen-categories-list">
      <SelectedElement
        v-for="el of elementChosen.chosenCategory"
        :key="el.id"
        :el="el"
      />
    </div>
    <div class="goods-list">
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
  </div>
</template>

<script setup>
import SelectorItem from "./SelectorItem.vue";
import { useElementChosen } from "../stores/elementChosenStore";
import { useItemStore } from "../stores/ItemsStore";
import SelectedElement from "./SelectedElement.vue";
import GoodsElement from './GoodsElement.vue';
const elementChosen = useElementChosen();
const ItemStore = useItemStore();

</script>

<style scoped>
.products-title {
  width: calc(100% - 220px);
  display: flex;
  flex-direction: column;
}
.items-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 43px;
}
.items-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-items: flex-end;
  width: 414px;
}

.item-title-text {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  color: #0c0c0d;
  margin: 0;
}

.item-title-count {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  color: #858585;
  margin: 0;
}

.items-range {
  display: flex;
  flex-direction: row;
  width: 166px;
  align-items: center;
}

.item-title-rate {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: rgba(12, 12, 13, 0.8);
  margin: 0;
}

.item-title-rate__img {
  align-self: center;
  margin-left: 8px;
}

.categories-list {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  row-gap: 10px;
  column-gap: 10px;
  flex-wrap: wrap;
}

.chosen-categories-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  margin-top: 10px;
}

.goods-list {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
}
</style>

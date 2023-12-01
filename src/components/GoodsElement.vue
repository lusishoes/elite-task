<template>
  <article class="goods-item" >
    <div
      class="goods-item__img-block"
      @mouseenter="showBtn = true"
      @mouseleave="showBtn = false"
    >
      <div class="goods-items-raiting">
        <img
          class="goods-items-raiting__img-element"
          alt="arrow"
          src="../images/icons/yellow-star.svg"
        />
        <p class="goods-items-raiting__text">4.6</p>
      </div>
      <img class="goods-item__img-element" alt="arrow" :src="img" />
      <img
        class="goods-item__heart-icon"
        alt="arrow"
        src="../images/icons/emptyheart.svg"
      />
      <div class="goods-item-popup-opener"  :class="{ show__popup: showBtn }" @click="popupStore.togglePopup(true)">
        <p class="goods-item__popup-description">Подробнее</p>
      </div>
      <div class="goods-items-tags">
        <div class="goods-items-tags-hit" :class="{ show__category: hit }">
          <p class="goods-items-tags-hit_text">Хит</p>
        </div>
        <div class="goods-items-tags-hit_new" :class="{ show__category: latest }">
          <p class="goods-items-tags-hit_text">Новинка</p>
        </div>
        <div class="goods-items-tags-freezing" :class="{ show__category: freeze }">
          <p class="goods-items-tags-hit_text">Заморозка</p>
        </div>
      </div>
      <div class="img-slider">
        <div class="img-slider-element"></div>
        <div class="img-slider-element img-slider-element__chosen"></div>
        <div class="img-slider-element"></div>
        <div class="img-slider-element"></div>
      </div>
    </div>
    <div class="goods-item__description">
      <h2 class="goods-item__description-title">
        {{ name }}
      </h2>
      <p class="goods-item__description-characteristics">300 г · Германия</p>
    </div>
    <div class="goods-item__buy-block">
      <div class="goods-item__price">
        <p class="goods-item__price-discount">110 ₽</p>
        <div class="goods-price-current__price">
          <p class="goods-item__price-current-price">{{ price }} ₽</p>
          <p class="goods-item-unit">/ кг</p>
        </div>
      </div>
      <img
        class="goods-item__buy-block-img"
        alt="arrow"
        src="../images/icons/add-btn.svg"
      />
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
const showBtn = ref(false);
import { usePopupStore } from "../stores/popupStore";
const popupStore = usePopupStore();
const props = defineProps({
  name:  {
    type: String,
    required: true,
  },
  price:  {
    type: Number,
    required: true,
  },
  hit:  {
    type: Boolean,
    required: true,
  },
  latest:  {
    type: Boolean,
    required: true,
  },
  freeze:  {
    type: Boolean,
    required: true,
  },
  img:  {
    type: String,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  }
});

</script>

<style scoped>
.goods-item__buy-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px 20px;
}
.goods-item__price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.goods-item__price-discount {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 18px */
  text-decoration: line-through;
  color: #858585;
  margin: 0;
}

.goods-price-current__price {
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
}

.goods-item__price-current-price {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0c0c0d;
  margin: 0;
}

.goods-item-unit {
  margin: 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #858585;
}

.goods-item__description {
  margin: 20px 16px 40px;
  width: 207px;
}

.goods-item__description-title {
  margin: 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #0c0c0d;
  margin-bottom: 6px;
}

.goods-item__description-characteristics {
  margin: 0;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
}
.img-slider {
  display: flex;
  flex-direction: row;
  position: absolute;
  column-gap: 4px;
  left: 16px;
  bottom: 4px;
}

.img-slider-element {
  background-color: #f4f4f4;
  border-radius: 6px;
  width: 49px;
  height: 2px;
}

.img-slider-element__chosen {
  background-color: #858585;
}
.goods-items-tags-hit {
  background-color: #ff8c22;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
}

.goods-items-tags-hit_new {
  background-color: #10b145;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}

.goods-items-tags-freezing {
  background-color: #22c6ea;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}
.goods-items-tags-hit_text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #fff;
}
.goods-item {
  width: 240px;
  height: 441px;
  border: 1px solid rgba(93, 136, 150, 0.08);
  border-radius: 9px;
}
.goods-item__img-block {
  position: relative;
}
.goods-item__img-element {
  width: 240px;
  height: 240px;
}

.goods-items-raiting {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 16px;
  left: 16px;
}

.goods-items-raiting__text {
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #585858;
  margin-left: 4px;
}

.goods-item__heart-icon {
  position: absolute;
  top: 16px;
  right: 14.5px;
}

.goods-items-tags {
  position: absolute;
  bottom: 10px;
  left: 16px;
}

.goods-item-popup-opener {
  position: absolute;
  left: 40px;
  bottom: 60px;
  padding: 8px 38px;
  cursor: pointer;
  background-color: #feedef;
  border-radius: 9px;
  /* width: 160px; */
  display: none;
}

.goods-item__popup-description {
  margin: 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #f3223c;
}

.show__category {
  display: inline-block;
}

.show__popup {
  display: block;
}
</style>

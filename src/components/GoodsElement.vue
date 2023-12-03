<template>
  <article class="goods-item">
    <div
      class="goods-item__img-block"
      @mouseenter="showBtn = true"
      @mouseleave="showBtn = false"
    >
      <div class="goods-items__raiting">
        <img
          class="goods-items__raiting-img-element"
          alt="arrow"
          src="../images/icons/yellow-star.svg"
        />
        <p class="goods-items__raiting-text">4.6</p>
      </div>
      <img class="goods-item__img-element" alt="arrow" :src="img" />
      <img
        class="goods-item__heart-icon"
        alt="arrow"
        src="../images/icons/emptyheart.svg"
        @click="console.log(popupStore.cardInfo)"
      />
      <div
        class="goods-item__popup-opener"
        :class="{
          show__popup: showBtn,
          description__add: ItemStore.checkPresenceObj(product) !== -1,
        }"
        @click="
          popupStore.togglePopup(true);
          popupStore.handleSetPopupInfo(product);
        "
      >
        <p class="goods-item__popup-description">Подробнее</p>
      </div>
      <div
        class="goods-items__tags"
        :class="{ tags__add: ItemStore.checkPresenceObj(product) !== -1 }"
      >
        <div class="goods-items__tags-hit" :class="{ show__category: hit }">
          <p class="goods-items__tags-hit-text">Хит</p>
        </div>
        <div
          class="goods-items__tags-hit_new"
          :class="{ show__category: latest }"
        >
          <p class="goods-items__tags-hit-text">Новинка</p>
        </div>
        <div
          class="goods-items__tags-freezing"
          :class="{ show__category: freeze }"
        >
          <p class="goods-items__tags-hit-text">Заморозка</p>
        </div>
      </div>
      <div
        class="goods-items__img-slider"
        :class="{ slider__add: ItemStore.checkPresenceObj(product) !== -1 }"
      >
        <div class="goods-items__img-slider-element"></div>
        <div
          class="goods-items__img-slider-element goodsItems__imgChoisen"
        ></div>
        <div class="goods-items__img-slider-element"></div>
        <div class="goods-items__img-slider-element"></div>
      </div>
    </div>
    <div
      class="goods-item__wrapper_block"
      :class="{ wrapper__add: ItemStore.checkPresenceObj(product) !== -1 }"
    >
      <div class="goods-item__description">
        <h2 class="goods-item__description-title">
          {{ name }}
        </h2>
        <p class="goods-item__description-characteristics">300 г · Германия</p>
      </div>
      <div class="goods-item__buy-block">
        <div class="goods-item__price">
          <div class="goods-item__content-bonus" v-if="isBonus == true">
            <p class="goods-item__content-bonus-text">+248</p>
            <img
              class="goods-item__bonus-img"
              alt="arrow"
              src="../images/icons/bonus.svg"
            />
          </div>
          <p class="goods-item__price-discount" v-else>110 ₽</p>
          <div class="goods-item__current-price">
            <p class="goods-item__current-price-text">{{ price }} ₽</p>
            <p class="goods-item__current-price-unit">/ кг</p>
          </div>
        </div>
        <img
          class="goods-item__buy-block-img"
          alt="arrow"
          src="../images/icons/add-btn.svg"
          v-if="ItemStore.checkPresenceObj(product) === -1"
          @click="ItemStore.addToCart(product)"
        />
      </div>
      <div
        class="goods-item__add-to-cart"
        v-if="ItemStore.checkPresenceObj(product) !== -1"
      >
        <div
          class="goods-item__change-quantity"
          @click="ItemStore.decrementQ(product)"
        >
          <img
            class="goods-item__quantity-img"
            alt="minus"
            src="../images/icons/minus.svg"
          />
        </div>
        <p class="goods-item-quantity-weight">
          {{ ItemStore.countCurrentItemCountity(product) }} кг
        </p>
        <div
          class="goods-item__change-quantity"
          @click="ItemStore.addToCart(product)"
        >
          <img
            class="goods-item__quantity-img"
            alt="plus"
            src="../images/icons/plus.svg"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
const showBtn = ref(false);

import { usePopupStore } from "../stores/popupStore";
const popupStore = usePopupStore();
import { useItemStore } from "../stores/ItemsStore";

const ItemStore = useItemStore();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hit: {
    type: Boolean,
    required: true,
  },
  latest: {
    type: Boolean,
    required: true,
  },
  freeze: {
    type: Boolean,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
  isBonus: {
    type: Boolean,
    required: true,
  },
  isAddToCard: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>

.description__add {
  bottom: 95px !important;
}

.slider__add {
  bottom: 52px !important;
}
.tags__add {
  bottom: 58px !important;
}

.goods-item__wrapper_block {
  background-color: #fff;
}

.wrapper__add {
  position: relative;
  bottom: 65px;
}

.goods-item__buy-block-img {
  cursor: pointer;
}
.goods-item__change-quantity {
  cursor: pointer;
}

.goods-item-quantity-weight {
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0c0c0d;
}

.goods-item__add-to-cart {
  display: flex;
  width: 208px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
}

.goods-item__change-quantity {
  width: 44px;
  height: 44px;
  background-color: rgba(93, 136, 150, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
}

.goods-item__content-bonus-text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #ffffff;
}

.goods-item__content-bonus {
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  justify-content: center;
  padding: 4px 0;
  border-radius: 40px;
  background: linear-gradient(81deg, #ff782d 4.95%, #f32254 72.54%);
  width: 51px;
  margin-bottom: 4px;
}
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

.goods-item__current-price {
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
}

.goods-item__current-price-text {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0c0c0d;
  margin: 0;
}

.goods-item__current-price-unit {
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
.goods-items__img-slider {
  display: flex;
  flex-direction: row;
  position: absolute;
  column-gap: 4px;
  left: 16px;
  bottom: 4px;
}

.goods-items__img-slider-element {
  background-color: #f4f4f4;
  border-radius: 6px;
  width: 49px;
  height: 2px;
}

.goodsItems__imgChoisen {
  background-color: #858585;
}
.goods-items__tags-hit {
  background-color: #ff8c22;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
}

.goods-items__tags-hit_new {
  background-color: #10b145;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}

.goods-items__tags-freezing {
  background-color: #22c6ea;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}
.goods-items__tags-hit-text {
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

.goods-items__raiting {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 16px;
  left: 16px;
}

.goods-items__raiting-text {
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

.goods-items__tags {
  position: absolute;
  bottom: 10px;
  left: 16px;
}

.goods-item__popup-opener {
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

<template>
  <div
    class="popup-overlay"
    :class="{ modal__visible: popupStore.isOpenPopup === true }"
  >
    <div class="popup_container">
      <img
        alt="close"
        src="../images/icons/close.svg"
        class="popup__close-button"
        @click="popupStore.togglePopup(false)"
      />
      <div class="popup__item-info">
        <div class="popup__item-image">
          <div class="popup__selectors">
            <div
              class="popup__selectors-hit"
              :class="{ show__category: popupStore.cardInfo?.hit }"
            >
              <p class="popup__selectors-text">Хит</p>
            </div>
            <div
              class="popup__selectors-new"
              :class="{ show__category: popupStore.cardInfo?.latest }"
            >
              <p class="popup__selectors-text">Новинка</p>
            </div>
            <div
              class="popup__selectors-freezing"
              :class="{ show__category: popupStore.cardInfo?.freeze }"
            >
              <p class="popup__selectors-text">Заморозка</p>
            </div>
          </div>
          <img
            :src="popupStore.cardInfo?.img"
            @click="console.log(popupStore.cardInfo?.img)"
            alt="item"
            class="popup__img-element"
          />
          <img
            src="../images/icons/emptyheart.svg"
            alt="heart"
            class="popup__item-like"
          />
        </div>
        <div class="popup__item-description">
          <h2 class="popup__title">
            Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг
          </h2>
          <div class="popup__description-values">
            <p class="popup__item-producer">Fish & More</p>
            <p class="popup__item-weight">Россия, 12 кг</p>
          </div>
          <div class="popup__items-raiting">
            <img
              class="popup__items-raiting__img-element"
              alt="arrow"
              src="../images/icons/yellow-star.svg"
            />
            <p class="popup__raiting-text">4.6</p>
          </div>
          <div class="popup__cart-info">
            <div class="popup__cart-info__bonus">
              <p class="popup__cart-info__text">+18</p>
              <img
                class="bonus icon"
                alt="arrow"
                src="../images/icons/bonus.svg"
              />
            </div>
            <div class="popup__cart-info__price">
              <p class="popup__cart-info__price-text">
                366 ₽ <span class="item-content-measure">/ кг</span>
              </p>
            </div>
            <div class="popup__cart-info__price-description">
              <p class="popup__cart-info__price-text-description">
                2456 ₽
                <span class="popup__cart-info__price-text-description"
                  >/ кор</span
                >
              </p>
            </div>
          </div>
          <div class="popup__cart-info__add">
            <div class="popup__cart-info__add-item">Добавить в корзину</div>
            <p class="popup__cart-info__add-item_text">В наличии много</p>
          </div>
          <p class="popup__cart-info-goto-card">Перейти в карточку товара</p>
        </div>
      </div>
      <div class="popup__characteristics">
        <h3 class="popup__characteristics-title">Характеристики</h3>
        <div class="popup__characteristics-block">
          <div class="popup__characteristics-block-element">
            <div class="popup__characteristics-block__description">
              <p class="popup__item-elem__title">Срок хранения</p>
              <p class="popup__item-elem__description">1 год</p>
            </div>
            <div class="popup__characteristics-block__description">
              <p class="popup__item-elem__title">Тип транспортной упаковки</p>
              <p class="popup__item-elem__description">Коробка</p>
            </div>
          </div>
          <div class="popup__characteristics-block-element">
            <div class="popup__characteristics-block__description">
              <p class="popup__item-elem__title">
                Количество в транспортной упаковке
              </p>
              <p class="popup__item-elem__description">10</p>
            </div>
            <div class="popup__characteristics-block__description">
              <p class="popup__item-elem__title">
                Количество в транспортной упаковке на паллете
              </p>
              <p class="popup__item-elem__description">40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePopupStore } from "../stores/popupStore";
const popupStore = usePopupStore();
// const productObj = popupStore.cardInfo;
</script>
<style lang="scss" scoped>
.popup__item-elem__description {
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: #0c0c0d;
  margin: 0;
}

.popup__item-elem__title {
  margin: 0;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: #858585;
}

.popup__characteristics-block__description {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.popup__characteristics-block-element {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.popup__characteristics-block {
  display: flex;
  flex-direction: row;
  column-gap: 44px;
  margin-top: 10px;
}

.popup__characteristics-title {
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #0c0c0d;
}

.popup__characteristics {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.popup__cart-info-goto-card {
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  opacity: 0.8;
  color: #f3223c;
  margin-top: 23px;
}

.popup__cart-info__add-item_text {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #858585;
  margin: 0;
}

.popup__cart-info__add {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}
.popup__cart-info__add-item {
  display: flex;
  width: 200px;
  padding: 14px 0;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background-color: #f3223c;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #fff;
  margin: 0;
}

.popup__cart-info__price-text-description {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  margin: 0;
}

.popup__cart-info__price-description {
  display: flex;
  flex-direction: row;
}
.popup__cart-info__price {
  display: flex;
  flex-direction: row;
}

.item-content-measure {
  margin: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 90% */
  letter-spacing: -0.03px;
  color: #858585;
}

.popup__cart-info__price-text {
  margin: 0;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0c0c0d;
}

.popup__cart-info {
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
}

.popup__cart-info__text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #ffffff;
}

.popup__cart-info__bonus {
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  justify-content: center;
  padding: 4px 0;
  border-radius: 40px;
  background: linear-gradient(81deg, #ff782d 4.95%, #f32254 72.54%);
  width: 51px;
}

.popup__items-raiting {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 30px;
  top: 90px;
}

.popup__raiting-text {
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #585858;
  margin-left: 4px;
}
.popup__item-producer {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #0c0c0d;
  margin: 0;
}

.popup__item-weight {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  margin: 0;
}
.popup__description-values {
  display: flex;
  flex-direction: row;
  width: 178px;
  justify-content: space-between;
  margin-top: 16px;
}

.popup__item-description {
  margin-left: 30px;
  width: 300px;
  height: 335px;
}
.popup__title {
  font-style: normal;
  font-weight: 500;
  line-height: 135%;
  color: #0c0c0d;
  font-size: 16px;
  margin: 0;
}

.popup__item-like {
  position: absolute;
  right: 16px;
  top: 16px;
}
.popup__selectors {
  position: absolute;
  top: 16px;
  left: 16px;
}
.popup__selectors-hit {
  background-color: #ff8c22;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  /* position: absolute; */
}

.popup__img-element {
  width: 100%;
  border-radius: 9px;
}

.popup__selectors-text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #fff;
}
.popup__item-info {
  display: flex;
  flex-direction: row;
}

.popup__item-image {
  width: 335px;
  height: 335px;
  position: relative;
  border-radius: 9px;
  border: 1px solid rgba(93, 136, 150, 0.08);
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.12);
  display: none;
  align-items: center;
  justify-content: center;
}

.modal__visible {
  display: flex;
}

.popup_container {
  padding: 30px;
  border-radius: 12px;
  background: #fff;
  width: 750px;
  /* height: 547px; */
  flex-shrink: 0;
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
}

.popup__selectors-new {
  background-color: #10b145;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}

.popup__close-button {
  position: absolute;
  top: 30px;
  right: 30px;
  /* font-size: 20px;
  background: none;
  border: none; */
  cursor: pointer;
}
.popup__selectors-freezing {
  background-color: #22c6ea;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}

.show__category {
  display: inline-block;
}
</style>

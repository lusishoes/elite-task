<template>
  <div
    class="modal-overlay"
    :class="{ modal__visible: popupStore.isOpenPopup === true }"
  >
    <div class="modal-content">
      <img
        alt="close"
        src="../images/icons/close.svg"
        class="close-button"
        @click="popupStore.togglePopup(false)"
      />
      <div class="modal-content__item-info">
        <div class="modal-content__item-image">
          <div class="modal-content-selectors">
            <div class="goods-items-tags-hit" :class="{ show__category: popupStore.cardInfo?.hit }">
              <p class="goods-items-tags-hit_text">Хит</p>
            </div>
            <div class="goods-items-tags-hit_new" :class="{ show__category: popupStore.cardInfo?.latest }">
              <p class="goods-items-tags-hit_text">Новинка</p>
            </div>
            <div class="goods-items-tags-freezing" :class="{ show__category: popupStore.cardInfo?.freeze }">
              <p class="goods-items-tags-hit_text">Заморозка</p>
            </div>
          </div>
          <img
            :src="popupStore.cardInfo?.img"
            @click="console.log(popupStore.cardInfo?.img)"
            alt="item"
            class="modal-content__item-image_element"
          />
          <img
            src="../images/icons/emptyheart.svg"
            alt="heart"
            class="modal-content__item-like"
          />
        </div>
        <div class="item-content__item-description">
          <h2 class="item-content-title">
            Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг
          </h2>
          <div class="item-content-description__values">
            <p class="item-producer">Fish & More</p>
            <p class="item-weight">Россия, 12 кг</p>
          </div>
          <div class="goods-items-raiting">
            <img
              class="goods-items-raiting__img-element"
              alt="arrow"
              src="../images/icons/yellow-star.svg"
            />
            <p class="goods-items-raiting__text">4.6</p>
          </div>
          <div class="item-content-cart">
            <div class="item-content-bonus">
              <p class="item-content-bonus-text">
                +18
              </p>
              <img
                class="as"
                alt="arrow"
                src="../images/icons/bonus.svg"
              />
            </div>
            <div class="item-content-price">
              <p class="item-price-text">366 ₽ <span class="item-content-measure">/ кг</span></p>
            </div>
            <div class="item-content-price-description">
              <p class="item-price-text-description">2456 ₽ <span class="item-price-text-description">/ кор</span></p>
            </div>
          </div>
          <div class="add-item-tocart">
            <div class="add-item-btn">
              Добавить в корзину
            </div>
            <p class="add-item-text">
              В наличии много
            </p>
          </div>
          <p class="road-to-item-cart">
            Перейти в карточку товара
          </p>
        </div>
      </div>
      <div class="item-characteristics">
        <h3 class="item-characteristics-title">
          Характеристики
        </h3>
        <div class="item-characteristics-block">
          <div class="item-characteristics-block-element">
            <div class="item-characteristics-block-description">
                <p class="item-elem-title">
                Срок хранения
                </p>
                <p class="item-elem-description">
                  1 год
                </p>
            </div>
            <div class="item-characteristics-block-description">
                <p class="item-elem-title">
                  Тип транспортной упаковки
                </p>
                <p class="item-elem-description">
                  Коробка
                </p>
            </div>
          </div>
          <div class="item-characteristics-block-element">
            <div class="item-characteristics-block-description">
                <p class="item-elem-title">
                  Количество в транспортной упаковке
                </p>
                <p class="item-elem-description">
                  10
                </p>
            </div>
            <div class="item-characteristics-block-description">
                <p class="item-elem-title">
                  Количество в транспортной упаковке на паллете
                </p>
                <p class="item-elem-description">
                  40
                </p>
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
<style scoped>
.item-elem-description {
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: #0C0C0D;
  margin: 0;
}

.item-elem-title {
  margin: 0;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: #858585;
}

.item-characteristics-block-description {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.item-characteristics-block-element {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.item-characteristics-block {
  display: flex;
  flex-direction: row;
  column-gap: 44px; 
  margin-top: 10px;
}

.item-characteristics-title {
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #0C0C0D;
}

.item-characteristics {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.road-to-item-cart {
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  opacity: 0.8;
  color: #F3223C;
  margin-top: 23px;
} 

.add-item-text {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #858585;
  margin: 0;
}

.add-item-tocart {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}
.add-item-btn {
  display: flex;
  width: 200px;
  padding: 14px 0;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background-color: #F3223C;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #FFF;
  margin: 0;
}

.item-price-text-description {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  margin: 0;
}

.item-content-price-description {
  display: flex;
  flex-direction: row;

}
.item-content-price {
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

.item-price-text {
  margin: 0;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0C0C0D;
}

.item-content-cart {
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
}

.item-content-bonus-text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #FFFFFF;
}

.item-content-bonus {
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  justify-content: center;
  padding: 4px 0;
  border-radius: 40px;
  background: linear-gradient(81deg, #FF782D 4.95%, #F32254 72.54%);
  width: 51px;
}

.goods-items-raiting {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 30px;
  top: 90px;
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
.item-producer {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #0c0c0d;
  margin: 0;
}

.item-weight {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  margin: 0;
}
.item-content-description__values {
  display: flex;
  flex-direction: row;
  width: 178px;
  justify-content: space-between;
  margin-top: 16px;
}

.item-content__item-description {
  margin-left: 30px;
  width: 300px;
  height: 335px;
}
.item-content-title {
  font-style: normal;
  font-weight: 500;
  line-height: 135%;
  color: #0c0c0d;
  font-size: 16px;
  margin: 0;
}

.modal-content__item-like {
  position: absolute;
  right: 16px;
  top: 16px;
}
.modal-content-selectors {
  position: absolute;
  top: 16px;
  left: 16px;
}
.goods-items-tags-hit {
  background-color: #ff8c22;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  /* position: absolute; */
}

.modal-content__item-image_element {
  width: 100%;
  border-radius: 9px;
}

.goods-items-tags-hit_text {
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #fff;
}
.modal-content__item-info {
  display: flex;
  flex-direction: row;
}

.modal-content__item-image {
  width: 335px;
  height: 335px;
  position: relative;
  border-radius: 9px;
  border: 1px solid rgba(93, 136, 150, 0.08);
}

.modal-overlay {
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

.modal-content {
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

.goods-items-tags-hit_new {
  background-color: #10b145;
  border-radius: 6px;
  display: none;
  padding: 6px 8px;
  margin-left: 6px;
}

.close-button {
  position: absolute;
  top: 30px;
  right: 30px;
  /* font-size: 20px;
  background: none;
  border: none; */
  cursor: pointer;
}
.goods-items-tags-freezing {
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

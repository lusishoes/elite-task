<template>
  <div class="modal-overlay" :class="{ modal__visible: popupStore.isOpenPopup === true }">
    <div class="modal-content">
      <img alt="close" src="../images/icons/close.svg" class="close-button"  @click="popupStore.togglePopup(false)"/>
      <div class="modal-content__item-info">
        <div class="modal-content__item-image">
          <div class="modal-content-selectors">
            <div class="goods-items-tags-hit">
            <p class="goods-items-tags-hit_text">Хит</p>
          </div>
          <div class="goods-items-tags-hit_new">
            <p class="goods-items-tags-hit_text">Новинка</p>
          </div>
          </div>
          <img
            src="../images/1.png"
            alt="item"
            class="modal-content__item-image_element"
          />
          <img
            src="../images/icons/emptyheart.svg"
            alt="heart"
            class="modal-content__item-like"
          />
        </div>
        <div class="item-content__item-description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePopupStore } from "../stores/popupStore";
const popupStore = usePopupStore();

</script>
<style scoped>

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
  display: inline-block;
  padding: 6px 8px;
  /* position: absolute; */
}

.modal-content__item-image_element {
  width: 100%;
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
  height: 547px;
  flex-shrink: 0;
  position: relative;
  z-index: 3;
}

.goods-items-tags-hit_new {
  background-color: #10b145;
  border-radius: 6px;
  display: inline-block;
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
</style>

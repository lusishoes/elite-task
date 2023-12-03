<template>
  <div class="sidebar">
    <SideBarTitle title="Бренд" :arrow="false" />
    <div class="sidebar-block">
      <SideBarTitle title="Страна" :arrow="true" />
      <div class="sidebar-block__choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.contriesItems"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Направления меню" :arrow="true" />
      <div class="sidebar-block__list-container">
        <div class="sidebar-block-list">
          <div class="sidebar-block__choisen-items">
            <ChosenItem
              v-for="sideBarItem of sideBarStore.sideBarItem"
              :key="sideBarItem.id"
              :sideBarItem="sideBarItem"
            />
          </div>
        </div>
        <img
          class="sidebar-block__img"
          alt="scrollbar"
          src="../images/icons/scrollbar.svg"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Вид сыра" :arrow="true" />
      <div class="sidebar-block__choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.typeOfCheeseItems"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Вкус сыра" :arrow="true" />
      <div class="sidebar-block__choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.tasteOfCheeseItems"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Вес" :arrow="null" />
      <Input
        :min="140"
        :max="480"
        measure="г"
        v-model:min-value="sliderMin"
        v-model:max-value="sliderMax"
      />
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Цена" :arrow="null" />
      <Input
        :min="140"
        :max="480"
        measure="₽"
        v-model:min-value="sliderMin1"
        v-model:max-value="sliderMax1"
      />
    </div>
    <div class="sidebar-reset-btn">Очистить фильтр</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChosenItem from "./ChosenItem.vue";
import { useSideBarItem } from "../stores/sideBarStore";
import SideBarTitle from "./SideBarTitle.vue";
import Input from "./Input.vue";
const sliderMin = ref(140);
const sliderMax = ref(480);
const sliderMin1 = ref(140);
const sliderMax1 = ref(480);
const sideBarStore = useSideBarItem();
</script>

<style lang="scss" scoped>
.sidebar-block__list-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar-block__img {
  margin-top: 20px;
  height: 220px;
}
.sidebar-reset-btn {
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #858585;
  border-radius: 6px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 48px;
  background-color: rgba(93, 136, 150, 0.08);
}
.sidebar {
  display: flex;
  flex-direction: column;
  width: 220px;
  row-gap: 30px;
}

.sidebar-block__choisen-items {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  row-gap: 14px;
}
</style>

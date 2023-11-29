<template>
  <div class="sidebar">
    <SideBarTitle title="Бренд" :arrow="false" />
    <div class="sidebar-block">
      <SideBarTitle title="Страна" :arrow="true" />
      <div class="sidebar-choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.contriesItems"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Направления меню" :arrow="true" />
      <div class="sidebar-choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.sideBarItem"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Вид сыра" :arrow="true" />
      <div class="sidebar-choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.typeOfCheeseItems"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <div class="sidebar-block">
      <SideBarTitle title="Вкус сыра" :arrow="true" />
      <div class="sidebar-choisen-items">
        <ChosenItem
          v-for="sideBarItem of sideBarStore.tasteOfCheeseItems"
          :key="sideBarItem.id"
          :sideBarItem="sideBarItem"
        />
      </div>
    </div>
    <Input       
      :min="140"
      :max="480"
      v-model:min-value="sliderMin"
      v-model:max-value="sliderMax"
    />
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
const sideBarStore = useSideBarItem();
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 220px;
  row-gap: 30px;
}

.sidebar-choisen-items {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  row-gap: 14px;
}
</style>

<template>
  <div class="sidebar">
    <!-- <div class="sidebar-container">
      <p class="sidebar-container__text">Бренд</p>
      <img
        class="sidebar-container__img"
        alt="arrow"
        src="../images/icons/arrow down.svg"
      />
    </div> -->
    <SideBarTitle title="Бренд" :arrow="false"/>
    <div class="sidebar-block">
    <SideBarTitle title="Страна" :arrow="true"/>
    <div class="sidebar-choisen-items">
      <ChosenItem
       v-for="sideBarItem of sideBarStore.contriesItems"
        :key="sideBarItem.id"
        :sideBarItem="sideBarItem"
      />
    </div>
  </div>
    <div class="sidebar-block">
    <SideBarTitle title="Направления меню" :arrow="true"/>
      <div class="sidebar-choisen-items">
       <ChosenItem
       v-for="sideBarItem of sideBarStore.sideBarItem"
        :key="sideBarItem.id"
        :sideBarItem="sideBarItem"
      />
      </div>
    </div>
  </div>
</template>

<script setup>
import ChosenItem from './ChosenItem.vue';
import { useSideBarItem } from '../stores/sideBarStore';
import SideBarTitle from './SideBarTitle.vue';
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

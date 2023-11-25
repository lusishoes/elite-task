<template>
        <div class="sidebar-choisen-items__item">
          <img
          v-if="!sideBarItem.isChosen"
            class="sidebar-choisen-items__item-img"
            :alt="sideBarItem.text"
            src="../images/icons/round.svg"
          />
          <img
          v-else
            class="sidebar-choisen-items__item-img"
            :alt="sideBarItem.text"
            src="../images/icons/round-choisen.svg"
          />
          <p class="sidebar-choisen-items__item-text">{{ sideBarItem.text }}</p>
        </div>
</template>

<script setup>
import { useSideBarItem } from '../stores/sideBarStore';

const sideBarStore = useSideBarItem();
const props = defineProps({
  sideBarItem:  {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style scoped>

.sidebar-choisen-items__item {
  display: flex;
  flex-direction: row;
}

.sidebar-choisen-items__item-text {
  margin: 0;
  margin-left: 8px;
}
</style>
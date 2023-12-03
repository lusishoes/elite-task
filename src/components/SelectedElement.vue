<template>
  <div class="selected-element">
    <p class="selected-element__text">{{ el.name }}</p>
    <img
      src="../images/icons/greencloseicon.svg"
      alt="cross"
      class="selected-element__img"
    />
  </div>
</template>

<script setup>
import { useElementChosen } from "../stores/elementChosenStore";

const elementChosen = useElementChosen();
const props = defineProps({
  el: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.selected-element {
  padding: 12px;
  background-color: rgba(70, 161, 117, 0.16);
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
}

.selected-element__text {
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: #46a175;
}

.selected-element__img {
  margin-left: 8px;
}
</style>

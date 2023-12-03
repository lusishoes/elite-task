<template>
  <div class="selectorItem">
    <p class="selectorItem__text">{{ el.name }}</p>
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

<style lang="scss" scoped>
.selectorItem {
  padding: 12px;
  background-color: #f2f3f5;
  display: block;
  border-radius: 6px;
}

.selectorItem__text {
  margin: 0;
}
</style>

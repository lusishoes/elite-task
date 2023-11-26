<template>
  <div class='selectorItem'>
      <p class="selectorItem__text"> {{ el.name }}</p>
  </div>
</template>

<script setup>
import { useElementChosen } from '../stores/elementChosen';

const elementChosen = useElementChosen();
const props = defineProps({
  el:  {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.selectorItem {
  padding: 12px;
  background-color: #F2F3F5;
  display: block;
}

.selectorItem__text {
  margin: 0;
}
</style>

<template>
  <div class="modal-overlay" :class="{ show__modal: isVisiblePopup }">
    <div class="modal-content">
      <button class="close-button" @click="setPopupVisible(false)">×</button>


    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  isVisiblePopup: {
    type: Boolean,
    required: true,
  },
  setPopupVisible: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
.show__modal{
  display: flex;
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

.modal-content {
  border-radius: 12px;
  background: #FFF;
  width: 750px;
  height: 547px;
  flex-shrink: 0;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>

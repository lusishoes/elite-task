<template>
      <div class="sidebar-container">
        <p class="sidebar-container__text">{{ title }}</p>
        <img
        v-if="arrow === true && arrow !== null"
          class="sidebar-container__img"
          alt="arrow"
          src="../images/icons/arrow up.svg"
        />
        <img
        v-if="arrow === false && arrow !== null"
          class="sidebar-container__img"
          alt="arrow"
          src="../images/icons/arrow down.svg"
        />
      </div>
</template>

<script setup>
const props = defineProps({
  title:  {
    type: String,
    required: true,
  },
  arrow: {
    type: Boolean,
    required: true,
  }
});
</script>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar-container__text {
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #0c0c0d;
}

</style>

<script setup>
import { computed, ref, watchEffect } from "vue";

// define component props for the slider component
const { min, max, step, minValue, maxValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  minValue: {
    type: Number,
    default: 50,
  },
  maxValue: {
    type: Number,
    default: 80,
  },
});

// define emits for the slider component
const emit = defineEmits(["update:minValue", "update:maxValue"]);

// define refs for the slider element and the slider values
const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

// function to get the percentage of a value between the min and max values
const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to get the difference between the min and max values
const sliderDifference = computed(() => {
  return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

// function to set the css variables for width, left and right
const setCSSProps = (left, right) => {
  slider.value.style.setProperty("--progressLeft", `${left}%`);
  slider.value.style.setProperty("--progressRight", `${right}%`);
};

// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
  if (slider.value) {
    // emit slidet values when updated
    emit("update:minValue", sliderMinValue.value);
    emit("update:maxValue", sliderMaxValue.value);

    // calculate values in percentages
    const leftPercent = getPercent(sliderMinValue.value, min, max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

    // set the CSS variables
    setCSSProps(leftPercent, rightPercent);
  }
});

// validation sliderMinValue do not greater than sliderMaxValue and opposite
const onInput = ({ target }) => {
  if (target.name === 'min') {
    target.value > sliderMaxValue.value
      ? target.value = sliderMaxValue.value
      : sliderMinValue.value = parseFloat(target.value);
  }

  if (target.name === 'max') {
    target.value < sliderMinValue.value
      ? target.value = sliderMinValue.value
      : sliderMaxValue.value = parseFloat(target.value);
  }
};

</script>
<template>
  <div class="range-inputs">
    <div class="minmax-inputs">
    <input type="number" :step="step" v-model="sliderMinValue" class="minmax-input"/>
    <input type="number" :step="step" v-model="sliderMaxValue" class="minmax-input"/>
  </div>
  <div ref="slider" class="custom-slider minmax">
    <div class="minmax-indicator"></div>
    <input
      ref="inputMin"
      type="range"
      name="min"
      id="min"
      :min="min"
      :max="max"
      :value="minValue"
      :step="step"
      @input="onInput"
      class="indicator-input"
    />
    
    <input
      ref="inputMax"
      type="range"
      name="max"
      id="max"
      :min="min"
      :max="max"
      :value="maxValue"
      :step="step"
      @input="onInput"
      class="indicator-input"
    />
  </div>
</div>
</template>
<style scoped>
a,
.green {
  text-decoration: none;
  color: #00bd7e;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.custom-slider {
  --trackHeight: 0.35rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.indicator-input {
  position: relative;
  appearance: none;

  background: none;
  border-radius: 999px;
  z-index: 0;
  height: 100%;
  pointer-events: none;

}

/* ::before element to replace the slider track */
.indicator-input::before {
  content: "";
  display: block;
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  /* background: #00865a; */
  border-radius: 999px;
  /* background-color: red; */
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.indicator-input::-webkit-slider-runnable-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackHeight);
  border-radius: 999px;
}

.indicator-input::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: #FFFFFF;
  /* border: 1px solid  #00865a; */
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.indicator-input::-moz-range-track {
  appearance: none;
  /* background: #005a3c; */
  height: var(--trackHeight);
  border-radius: 999px;
}

.indicator-input::-moz-range-thumb {
  position: relative;
  box-sizing: border-box;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  /* background: #005a3c;
  border: 1px solid  #00865a; */
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.custom-slider.minmax {
  position: relative;
  height: var(--trackHeight);
  /* background: #005a3c; */
  background: #BDBDBD;
  border-radius: 999px;
  margin-top: 15px;
  /* margin: 0.5rem 0; */
  /* --progressLeft: 0%;
  --progressRight: 0%; */
}

.custom-slider .minmax-indicator {
  position: absolute;
  height: 100%;
  pointer-events: none;
  left: var(--thumbRadius);
  right: var(--thumbRadius);
}

.custom-slider .minmax-indicator::before {
  content: "";
  position: absolute;
  background: #00865a;
  height: 100%;
  left: var(--progressLeft);
  right: var(--progressRight);
}

.custom-slider.minmax input[type="range"] {
  position: absolute;
  width: calc(100% - var(--thumbRadius));
}

.custom-slider.minmax input[type="range"][name="max"] {
  left: var(--thumbRadius);
}

.custom-slider.minmax input[type="range"]::-webkit-slider-runnable-track {
  background: none;
}

.custom-slider.minmax input[type="range"]::before {
  display: none;
}

.minmax-inputs {
  display: flex;
  justify-content: space-between;
}

.minmax-input {
  width: 50px;
  background-color: rgba(93, 136, 150, 0.08);
  width: 106px;
  height: 37px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  color: #858585;
  outline: none;
  text-align:center;
}

/* .minmax-input::-webkit-outer-spin-button, */
.minmax-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.minmax-input:last-of-type {
  margin-left: 7px;
}
</style>
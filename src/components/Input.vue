<script setup>
import { ref, watchEffect } from "vue";

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
    default: 140,
  },
  maxValue: {
    type: Number,
    default: 480,
  },
  measure: {
    type: String,
    default: "до",
  },
});

const emit = defineEmits(["update:minValue", "update:maxValue"]);

const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

const setCSSProps = (left, right) => {
  slider.value.style.setProperty("--progressLeft", `${left}%`);
  slider.value.style.setProperty("--progressRight", `${right}%`);
};

watchEffect(() => {
  if (slider.value) {
    emit("update:minValue", sliderMinValue.value);
    emit("update:maxValue", sliderMaxValue.value);

    const leftPercent = getPercent(sliderMinValue.value, min, max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

    setCSSProps(leftPercent, rightPercent);
  }
});

const onInput = ({ target }) => {
  if (target.name === "min") {
    target.value > sliderMaxValue.value
      ? (target.value = sliderMaxValue.value)
      : (sliderMinValue.value = parseFloat(target.value));
  }

  if (target.name === "max") {
    target.value < sliderMinValue.value
      ? (target.value = sliderMinValue.value)
      : (sliderMaxValue.value = parseFloat(target.value));
  }
};
</script>
<template>
  <div class="inputs">
    <div class="inputs__minmax">
      <div class="inputs__minmax-wrapper">
        <p class="inputs__minmax-text">от</p>
        <p class="inputs__minmax-price">
          {{ measure }}
        </p>
        <input
          type="number"
          :step="step"
          v-model="sliderMinValue"
          class="input__minmax"
          :min="min"
          :max="max"
        />
      </div>
      <div class="inputs__minmax-wrapper">
        <p class="inputs__minmax-text">от</p>
        <p class="inputs__minmax-price">
          {{ measure }}
        </p>
        <input
          type="number"
          :step="step"
          v-model="sliderMaxValue"
          class="input__minmax"
          :min="min"
          :max="max"
        />
      </div>
    </div>
    <div
      ref="slider"
      class="inputs__custom-slider inputs__custom-slider__minmax"
    >
      <div class="inputs__minmax-indicator"></div>
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
        class="inputs__indicator-input"
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
        class="inputs__indicator-input"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inputs__minmax-text {
  position: absolute;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  left: 16px;
  bottom: -3px;
}

.inputs__minmax-price {
  position: absolute;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  bottom: -3px;
  right: 16px;
}

.inputs {
  width: 220px;
  margin-top: 20px;
}
.inputs__minmax-wrapper {
  position: relative;
}

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

.inputs__custom-slider {
  --trackHeight: 0.35rem;
  --thumbRadius: 1rem;
}

.inputs__indicator-input {
  position: relative;
  appearance: none;
  background: none;
  border-radius: 999px;
  z-index: 0;
  height: 100%;
  pointer-events: none;
}

.inputs__indicator-input::before {
  content: "";
  display: block;
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  border-radius: 999px;
}

.inputs__indicator-input::-webkit-slider-runnable-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackHeight);
  border-radius: 999px;
}

.inputs__indicator-input::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: #ffffff;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.inputs__indicator-input::-moz-range-track {
  appearance: none;
  height: var(--trackHeight);
  border-radius: 999px;
}

.inputs__indicator-input::-moz-range-thumb {
  position: relative;
  box-sizing: border-box;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.inputs__custom-slider.inputs__custom-slider__minmax {
  position: relative;
  height: var(--trackHeight);
  background: #bdbdbd;
  border-radius: 999px;
  margin-top: 15px;
}

.inputs__custom-slider .inputs__minmax-indicator {
  position: absolute;
  height: 100%;
  pointer-events: none;
  left: var(--thumbRadius);
  right: var(--thumbRadius);
}

.inputs__custom-slider .inputs__minmax-indicator::before {
  content: "";
  position: absolute;
  background: #46a175;
  height: 100%;
  left: var(--progressLeft);
  right: var(--progressRight);
}

.inputs__custom-slider.inputs__custom-slider__minmax input[type="range"] {
  position: absolute;
  width: calc(100% - var(--thumbRadius));
}

.inputs__custom-slider.inputs__custom-slider__minmax
  input[type="range"][name="max"] {
  left: var(--thumbRadius);
}

.inputs__custom-slider.inputs__custom-slider__minmax
  input[type="range"]::-webkit-slider-runnable-track {
  background: none;
}

.inputs__custom-slider.inputs__custom-slider__minmax
  input[type="range"]::before {
  display: none;
}

.inputs__minmax {
  display: flex;
  justify-content: space-between;
}

.input__minmax {
  background-color: rgba(93, 136, 150, 0.08);
  width: 102px;
  height: 37px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #858585;
  outline: none;
  text-align: center;
  margin-left: 7px;
}

.input__minmax::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input__minmax:last-child {
  margin-left: 0;
}
</style>

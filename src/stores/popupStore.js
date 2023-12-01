import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: () => ({
    isOpenPopup: false,
  }),
  actions: {
    togglePopup(val) {
      this.isOpenPopup = val;
    }
  }
});
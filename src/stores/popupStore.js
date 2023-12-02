import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popup', {
  state: () => ({
    isOpenPopup: false,
    cardInfo: {},
  }),
  actions: {
    togglePopup(val) {
      this.isOpenPopup = val;
    },
    handleSetPopupInfo(el) {
      this.cardInfo = el;
    },
  },
});

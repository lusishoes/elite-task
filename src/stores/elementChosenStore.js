import { defineStore } from 'pinia';

export const useElementChosen = defineStore('elementChosen', {
  state: () => ({
    category: [
      {
        id: 1,
        name: 'Говядина 6',
        isChosen: false,
      },
      {
        id: 2,
        name: 'Свинина 47',
        isChosen: false,
      },
      {
        id: 3,
        name: 'Птица 3',
        isChosen: false,
      },
      {
        id: 4,
        name: 'Крольчатина 5',
        isChosen: false,
      },
      {
        id: 5,
        name: 'Баранина 5',
        isChosen: false,
      },
      {
        id: 6,
        name: 'Телятина 5',
        isChosen: false,
      },
      {
        id: 7,
        name: 'Шашлык 5',
        isChosen: false,
      },
      {
        id: 8,
        name: 'Курица 5',
        isChosen: false,
      },
      {
        id: 9,
        name: 'Гусь, утка, индейка, перепелка 5',
        isChosen: false,
      },
    ],
    chosenCategory: [
      {
        id: 10,
        name: 'Bonefesto',
      },
      {
        id: 11,
        name: 'Сметанковый',
      },
    ],
  }),
});

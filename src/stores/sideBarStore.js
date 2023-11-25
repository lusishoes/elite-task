import { defineStore } from "pinia";

export const useSideBarItem = defineStore("sideBarItem", {
  state: () => ({
    sideBarItem: [
      {
        id: 1,
        text: 'Банкетное меню',
        isChosen: false,
      },
      {
        id: 2,
        text: 'Бургеры',
        isChosen: true,
      },
      {
        id: 3,
        text: 'Денер, шаурма, хот-дог',
        isChosen: false,
      },
      {
        id: 4,
        text: 'Закуски для бара',
        isChosen: false,
      },
      {
        id: 5,
        text: 'Итальянская кухня',
        isChosen: false,
      },
      {
        id: 6,
        text: 'Суши и роллы',
        isChosen: false,
      },
    ],
    contriesItems: [
      {
        id: 1,
        text: 'Россия',
      },
      {
        id:2,
        text: 'Сербия',
      },
    ]
  }),
});
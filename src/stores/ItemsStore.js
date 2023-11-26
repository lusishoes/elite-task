import { defineStore } from "pinia";

export const useItemStore= defineStore("itemStore", {
  state: () => ({
    movies: [
      {
        new: true,
        hit: true,
        frozen: true,
        price: 496,
        discount: true,
        discount_price: 110,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        image: src
      },
      {
        new: true,
        hit: true,
        frozen: true,
        price: 496,
        discount: true,
        discount_price: 110,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      },

    ],
  }),
});
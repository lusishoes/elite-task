import { defineStore } from 'pinia';

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: true,
        img: '../src/images/1.png',
        isBonus: false,
        weigth: 0.3,
      },
      {
        id: 2,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: true,
        img: '../src/images/2.png',
        isBonus: false,
        weigth: 0.3,
      },
      {
        id: 3,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: true,
        img: '../src/images/3.png',
        isBonus: true,
        weigth: 0.3,
      },
      {
        id: 4,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: false,
        img: '../src/images/4.png',
        isBonus: false,
        weigth: 0.3,
      },
      {
        id: 5,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: false,
        latest: true,
        freeze: false,
        img: '../src/images/5.jpeg',
        isBonus: false,
        weigth: 0.3,
      },
      {
        id: 6,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: false,
        freeze: false,
        img: '../src/images/6.png',
        isBonus: false,
        weigth: 0.3,
      },
      {
        id: 7,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: true,
        img: '../src/images/7.png',
        isBonus: true,
        weigth: 0.3,
      },
      {
        id: 8,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: true,
        img: '../src/images/8.png',
        isBonus: false,
        weigth: 0.3,
      },
      {
        id: 9,
        name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
        price: 496,
        hit: true,
        latest: true,
        freeze: true,
        img: '../src/images/9.png',
        isBonus: false,
        weigth: 0.3,
      },
    ],
    cartItems: [],
    popupElement: {},
  }),
  actions: {
    countCartItems() {
      return this.cartItems.length;
    },
    checkPresenceObj(item) {
      return this.cartItems.findIndex((product) => product.id === item.id);
    },
    countCurrentItemCountity(item) {
      return (this.cartItems.filter((currentItem) => currentItem === item).length * item.weigth).toFixed(1);
    },
    addToCart(item) {
      this.cartItems.push(item);
    },
    decrementQ(item) {
      const index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        const indexElem = this.cartItems.indexOf(item)
        this.cartItems.splice(indexElem, 1);
      }
    },
  },
});

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
      },
    ],
    cartItems: [],
    popupElement: {},
  }),
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
  },
  actions: {
    checkPresenceObj(item) {
      return this.cartItems.findIndex((product) => product.id === item.id);
    },
    addToCart(item) {
      const index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.products[index].quantity += 1;
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
      }
    },
    incrementItem(item) {
      const index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }
    },
    decrementQ(item) {
      const index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter((product) => product.id !== item.id);
        }
      }
    },
  },
});

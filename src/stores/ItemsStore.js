import { defineStore } from "pinia";

export const useItemStore = defineStore("itemStore", {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: true,
          latest: true,
          freeze: true,
          img: '../src/images/1.png',
        },
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: true,
          latest: true,
          freeze: true,
          img: '../src/images/2.png',
        },
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: true,
          latest: true,
          freeze: true,
          img: '../src/images/3.png',
        },
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: true,
          latest: true,
          freeze: false,
          img: '../src/images/4.png',
        },
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: false,
          latest: true,
          freeze: false,
          img: '../src/images/5.jpeg',
        },
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: true,
          latest: false,
          freeze: false,
          img: '../src/images/6.png',
        },
        {
          id: 1,
          name: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
          price: 496,
          hit: true,
          latest: true,
          freeze: true,
          img: '../src/images/7.png',
        },
      ],
      cartItems: [],
      popupElement: {},
    };
  },
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if(index !== -1) {
        this.products[index].quantity += 1;
      }else {
        item.quantity = 1;
        this.cartItems.push(item);
      }
    },
    incrementItem(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if(index !== -1) {
          this.cartItems[index].quantity += 1;
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if(index !== -1) {
          this.cartItems[index].quantity -= 1;
          if(this.cartItems[index].quantity === 0){
              this.cartItems = this.cartItems.filter(product => product.id !== item.id);
          }
      }
    }
  }
});

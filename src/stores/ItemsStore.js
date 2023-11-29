import { defineStore } from "pinia";

export const useItemStore = defineStore("itemStore", {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: "Iphone 12",
          price: 700,
          image:
            "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg",
        },
      ],
      cartItems: [],
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

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
    activeTab: 2,
  }),
  // getters: {
  //   watchedMovies() {
  //     return this.movies.filter((el) => el.isWatched);
  //   },
  //   totalCountMovies() {
  //     return this.movies.length;
  //   },
  // },
  // actions: {
  //   setActiveTab(id) {
  //     this.activeTab = id;
  //   },
  //   toggleWatched(id) {
  //     const idx = this.movies.findIndex((el) => el.id === id);
  //     this.movies[idx].isWatched = !this.movies[idx].isWatched;
  //   },
  //   deleteMovie(id) {
  //     this.movies = this.movies.filter((el) => el.id !== id);
  //   },
  // },
});
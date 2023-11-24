import { defineStore } from "pinia";

export const useSideBarItem = defineStore("sideBarItem", {
  state: () => ({
    sideBarItem: [
      {
        id: 1,
        text: 'Бургеры',
        imgSrc: '../images/icons/round.svg'
      },
      {
        id: 2,
        original_title: "The Batman",
        overview:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        release_date: "2022-03-01",
        isWatched: true,
      },
    ],
    // activeTab: 2,
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
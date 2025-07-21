import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    userId: null,
    isAutorised: true,
  }),

  getters: {
    doubleCount: (state) => state.counter * 2
  },

  actions: {
    increment() {
      this.counter++
    },
    logIn() {
      this.isAutorised = false;
    },
    logOut() {
      this.isAutorised = false;
      console.log('this.isAutorised', this.isAutorised)
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

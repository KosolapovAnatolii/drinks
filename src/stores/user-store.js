import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => ({
    userToken: null,
    isAutorised: false,
  }),

  getters: {

  },

  actions: {
    logIn(token) {
      this.isAutorised = true;
      this.userToken = token;
      localStorage.setItem('auth_token', token);
    },
    logOut() {
      this.isAutorised = false;
      localStorage.removeItem('auth_token');
      console.log('this.isAutorised', this.isAutorised)
    },
    checkAuth() {
      const token = localStorage.getItem('auth_token');
      console.log('token from localstorage', token)
      if (token) {
        this.isAuthorized = true;
        this.userToken = token;
      }
      console.log('this.isAuthorized', this.isAuthorized)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

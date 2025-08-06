import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => ({
    userToken: null,
    isAutorised: false,
    lang: 'uk',
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
      if (token) {
        this.isAutorised = true;
        this.userToken = token;
      }
    },
    setLang(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang);
    },
    checkLang() {
      const lang = localStorage.getItem('lang');
      if (lang) {
        this.lang = lang;
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

import { createStore } from 'vuex'

export default createStore({
  state: {
    
    isLoading: false,
    user:
        localStorage.getItem("user") &&
        localStorage.getItem("user") !== "undefined" &&
        localStorage.getItem("user") !== "null"
            ? JSON.parse(localStorage.getItem("user")!)
            : null,
    userToken: localStorage.getItem("userToken") || null,
    userRefreshToken: localStorage.getItem("userRefreshToken") || null,

    // slugs: [],
  },
  getters: {
  
  },
  mutations: {
 
  },
  actions: {
  
  },
  modules: {
  }
})

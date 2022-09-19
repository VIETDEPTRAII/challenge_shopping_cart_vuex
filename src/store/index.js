import { createStore } from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

export default createStore({
  modules: {
    products: products,
    cart: cart
  },

  state: {
    isLoggedIn: false
  },

  getters: {
    isAuthenticatedUser(state) {
      return state.isLoggedIn
    }
  },

  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.value
    }
  },

  actions: {
    login(context) {
      context.commit({
        type: 'setAuth',
        value: true
      })
    },

    logout(context) {
      context.commit({
        type: 'setAuth',
        value: false
      });
    }
  }
})

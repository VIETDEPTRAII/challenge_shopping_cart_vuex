const state = {
  items: [],
  total: 0,
  qty: 0
}
const getters = {
  cartQuantity(state) {
    return state.qty;
  },

  totalPrice(state) {
    return state.total.toFixed(2);
  },

  cartItems(state) {
    return state.items;
  }
}

const mutations = {
  addProductToCart(state, payload) {
    const productData = payload.product

    const productInCartIndex = state.items.findIndex(
      (ci) => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1,
      };
      state.items.push(newItem);
    }
    state.qty++;
    state.total += productData.price;
  },

  removeProductFromCart(state, payload) {
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === payload.prodId
    );
    const prodData = state.items[productInCartIndex];
    state.items.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  }
}

const actions = {
  addToCart(context, payload) {
    context.commit('addProductToCart', payload)
  },

  removeItem(context, payload) {
    context.commit('removeProductFromCart', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

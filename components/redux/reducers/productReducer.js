import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

const initialValue = 0;

export const addToCartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

const initial = 0;

export const changeTheNumber = (state = initial, action) => {
  switch (action.type) {
    case "INCREMENT":
      //    return state + action.payload;
      // case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { product: productToAdd, quantity = 1 } = action.payload;
      const productsInCart = [...state];
      let isProductInCart = false;
      for (let i = 0; i < productsInCart.length; i++) {
        const product = productsInCart[i];
        if (product.id === productToAdd.id) {
          product.quantity = product.quantity + parseInt(quantity);
          isProductInCart = true;
          break;
        }
      }
      if (!isProductInCart) {
        productToAdd.quantity = parseInt(quantity);
        productsInCart.push(productToAdd);
      }
      return productsInCart;
    }
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const { productId, quantity: quantityToSet = 1 } = action.payload;
      const productsInCart = [...state];
      for (let i = 0; i < productsInCart.length; i++) {
        const product = productsInCart[i];
        if (product.id === productId) {
          product.quantity = parseInt(quantityToSet);
          break;
        }
      }
      return productsInCart;
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return state.filter((product) => product.id !== action.payload);
    }
    default:
      return state;
  }
};

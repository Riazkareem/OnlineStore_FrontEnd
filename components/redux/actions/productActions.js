import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const addToCart = (product, quantity = 1) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { product, quantity },
  };
};

export const addToCartBtn = () => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

export const updateProductQuantity = (productId, quantity = 1) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: { productId, quantity },
  };
};

export const deleteProduct = (productId) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});

export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    // payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

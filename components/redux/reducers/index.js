import { combineReducers } from "redux";
import {
  productsReducer,
  addToCartReducer,
  changeTheNumber,
  cartReducer,
} from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  allCartProducts: addToCartReducer,
  changeTheNumber: changeTheNumber,
  cartReducer: cartReducer,
});
export default reducers;

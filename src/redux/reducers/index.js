import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { cartReducer } from "./cartReducer";
import { contactReducer } from "./contactReducer";
import { filterReducer } from "./filterReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  cart: cartReducer,
  contact: contactReducer,
  filter: filterReducer,
  product: productReducer,
});

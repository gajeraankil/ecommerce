import * as actionTypes from "../actionTypes";

export const addToCart = (id, color, amount, product) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: { id, color, amount, product },
  });
};

// increment and decrement the product
export const setDecrease = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.SET_DECREMENT, payload });
};

export const setIncrease = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.SET_INCREMENT, payload });
};

// to remove the individual item from cart
export const removeItem = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_ITEM, payload });
};

// to empty cart
export const clearCart = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_CART });
};

export const cartTotalItem = () => (dispatch) => {
  dispatch({ type: actionTypes.CART_TOTAL_ITEM });
};

export const cartTotalPrice = () => (dispatch) => {
  dispatch({ type: actionTypes.CART_TOTAL_PRICE });
};

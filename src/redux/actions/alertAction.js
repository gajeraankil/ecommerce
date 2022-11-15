import * as actionTypes from "../actionTypes";

export const setAlert = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.SET_ALERT, payload });
};

export const resetAlert = () => (dispatch) => {
  dispatch({ type: actionTypes.RESET_ALERT });
};

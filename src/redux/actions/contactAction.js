import * as actionTypes from "../actionTypes";

export const postData = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.POST_DATA, payload });
};

export const postedData = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.POSTED_DATA, payload });
};

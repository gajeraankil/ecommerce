import * as actionTypes from "../actionTypes";
import {
  getProductData,
  getProductDetailsData,
} from "../../common/api/productApi";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING });
  try {
    const res = await getProductData();
    dispatch({ type: actionTypes.SET_API_DATA, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.API_ERROR });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_PRODUCT_DETAILS_LOADING });
  try {
    const res = await getProductDetailsData(id);
    dispatch({ type: actionTypes.SET_PRODUCT_DETAILS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.SET_PRODUCT_DETAILS_ERROR });
  }
};

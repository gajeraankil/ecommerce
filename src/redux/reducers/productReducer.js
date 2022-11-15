import * as actionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isProductDetailsLoading: false,
  productDetails: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.SET_API_DATA:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: action.payload.filter(
          (curElem) => curElem.featured === true
        ),
      };

    case actionTypes.API_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.SET_PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        isProductDetailsLoading: true,
      };

    case actionTypes.SET_PRODUCT_DETAILS:
      return {
        ...state,
        isProductDetailsLoading: false,
        productDetails: action.payload,
      };

    case actionTypes.SET_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        isProductDetailsLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

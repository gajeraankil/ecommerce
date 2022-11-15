import * as actionTypes from "../actionTypes";

// to set the grid view
export const setGridView = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_GRID_VIEW });
};

// to set the list view
export const setListView = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_LIST_VIEW });
};

// sorting function
export const sorting = (event) => (dispatch) => {
  dispatch({ type: actionTypes.GET_SORT_VALUE, payload: event.target.value });
};

// update the filter values
export const updateFilterValue = (event) => (dispatch) => {
  let name = event.target.name;
  let value = event.target.value;
  return dispatch({
    type: actionTypes.UPDATE_FILTERS_VALUE,
    payload: { name, value },
  });
};

// to clear the filters
export const clearFilters = () => (dispatch) => {
  return dispatch({ type: actionTypes.CLEAR_FILTERS });
};

export const filterProducts = () => (dispatch) => {
  dispatch({ type: actionTypes.FILTER_PRODUCTS });
};

export const sortingProducts = () => (dispatch) => {
  dispatch({ type: actionTypes.SORTING_PRODUCTS });
};

export const loadFilterProducts = (payload) => (dispatch) => {
  dispatch({ type: actionTypes.LOAD_FILTER_PRODUCTS, payload });
};

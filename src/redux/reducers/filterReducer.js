import * as actionTypes from "../actionTypes";

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "featured",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FILTER_PRODUCTS:
      let priceArr = action.payload.map((curElem) => curElem.price);
      const maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case actionTypes.SET_GRID_VIEW:
      return {
        ...state,
        grid_view: true,
      };

    case actionTypes.SET_LIST_VIEW:
      return {
        ...state,
        grid_view: false,
      };

    case actionTypes.GET_SORT_VALUE:
      return {
        ...state,
        sorting_value: action.payload,
      };

    case actionTypes.SORTING_PRODUCTS:
      let newSortData;

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        switch (sorting_value) {
          case "featured":
            return tempSortProduct;

          case "lowest":
            return a.price - b.price;

          case "highest":
            return b.price - a.price;

          case "a-z":
            return a.name.localeCompare(b.name);

          case "z-a":
            return b.name.localeCompare(a.name);

          default:
            return a.price - b.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case actionTypes.UPDATE_FILTERS_VALUE:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case actionTypes.FILTER_PRODUCTS:
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case actionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

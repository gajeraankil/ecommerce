import * as actionTypes from "../actionTypes";

const initialState = {
  user: {
    name: "",
    email: "",
    message: "",
  },
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTED_DATA:
      return {
        ...state,
        user: {
          name: "",
          email: "",
          message: "",
        },
      };

    default:
      return state;
  }
};

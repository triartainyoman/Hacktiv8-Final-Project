import { createStore } from "redux";

const initialState = {
  allProducts: [],
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(actionReducer);

export default store;

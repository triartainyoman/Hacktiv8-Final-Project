import { createStore } from "redux";

const initialState = {
  allProducts: [],
  counter: 0,
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "INCREMENT_CART":
      let plus = parseInt(action.payload);
      return {
        counter: state.counter + plus,
      };
    case "DECREMENT_CART":
      let minus = parseInt(action.payload);
      return {
        counter: state.counter - minus,
      };
    default:
      return state;
  }
};

const store = createStore(actionReducer);

export default store;

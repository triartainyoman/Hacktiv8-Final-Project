import React from "react";
import { createStore } from "redux";

const initialState = {
  allProducts: [],
  counter: 0,
  selectedProducts: [],
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      let products = [];
      action.payload.map((product) => {
        product.stock = 20;
        products.push(product);
      });

      return {
        ...state,
        allProducts: products,
      };
    case "SELECT_PRODUCT":
      state.counter = state.counter + parseInt(action.qty);
      action.payload.qty = action.qty;

      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
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

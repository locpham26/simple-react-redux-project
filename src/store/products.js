import { createSlice } from "@reduxjs/toolkit";

import drinks from "./data";

const slice = createSlice({
  name: "products",
  initialState: {
    list: drinks,
    total: 0,
  },
  reducers: {
    addToCart: (products, action) => {
      const index = products.list.findIndex(
        (product) => product.id === action.payload
      );
      const product = products.list[index];
      product.inCart.selected = true;
      product.inCart.quantity = 1;

      products.total += product.price;
    },
    removeFromCart: (products, action) => {
      const index = products.list.findIndex(
        (product) => product.id === action.payload
      );
      const product = products.list[index];
      products.total -= product.price * product.inCart.quantity;
      product.inCart.selected = false;
      product.inCart.quantity = 0;
    },
    incrementQuantity: (products, action) => {
      const index = products.list.findIndex(
        (product) => product.id === action.payload
      );

      const product = products.list[index];
      product.inCart.quantity += 1;

      products.total += product.price;
    },
    decrementQuantity: (products, action) => {
      const index = products.list.findIndex(
        (product) => product.id === action.payload
      );
      const product = products.list[index];

      if (product.inCart.quantity > 0) {
        product.inCart.quantity -= +1;
        products.total -= product.price;
        if (product.inCart.quantity === 0) {
          product.inCart.selected = false;
        }
      }
    },
    emptyCart: (products, action) => {
      for (let product of products.list) {
        product.inCart.selected = false;
        product.inCart.quantity = 0;
      }
      products.total = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = slice.actions;

export default slice.reducer;

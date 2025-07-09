import { createSlice } from "@reduxjs/toolkit";

let cartFromLocalStorage = [];
try {
  const stored = localStorage.getItem("Cart");
  cartFromLocalStorage = stored ? JSON.parse(stored) : [];
} catch (e) {
  cartFromLocalStorage = [];
}

const initialState = {
  allProducts: [],
  Search: "",
  Cart: cartFromLocalStorage || [],
  deliveryFee: 120,
  GrandTotalAmount: "",
};

const productSlice = createSlice({
  name: "sliceProduct",
  initialState,
  reducers: {
    setProductsInStore: (state, action) => {
      state.allProducts = action.payload;
    },
    SEARCHINPUT: (state, action) => {
      state.Search = action.payload;
    },
    addToCart: (state, action) => {
      const item = state.Cart.find(
        (i) => i.id === action.payload.id && i.Sizes === action.payload.Sizes
      );
      if (item) {
        item.quantity += 1;
      } else {
        const updatedCart = [...state.Cart, action.payload];
        state.Cart = updatedCart; // ✅ update Redux state
        localStorage.setItem("Cart", JSON.stringify(updatedCart)); // ✅ save to localStorage
      }
    },

    incrementQty: (state, action) => {
      const item = state.Cart.find(
        (i) => i.id === action.payload.id && i.Sizes === action.payload.Sizes
      );
      if (item) {
        item.quantity += 1;
        localStorage.setItem("Cart", JSON.stringify(state.Cart)); // sync updated Cart
      }
    },
    decrementQty: (state, action) => {
      const item = state.Cart.find(
        (i) => i.id === action.payload.id && i.Sizes === action.payload.Sizes
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("Cart", JSON.stringify(state.Cart));
      }
    },
    deleteCartItem: (state, action) => {
      console.log(action.payload);

      const item = state.Cart.filter((i) => i.id !== action.payload);
      state.Cart = item;
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
    },
    GrandTotalAmount: (state, action) => {
      state.GrandTotalAmount = action.payload;
    },
  },
});

export const {
  setProductsInStore,
  SEARCHINPUT,
  addToCart,
  incrementQty,
  decrementQty,
  deleteCartItem,
  GrandTotalAmount
} = productSlice.actions;
export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"; //To create a slice, we need to import createSlice from @reduxjs/toolkit

// ACTION is the data sent from the application to the store. It is a plain object that contains information about the event that just occurred.
// PAYLOAD is the data that is sent with the ACTION. It is the data that the store needs to update.
// REDUCER is a function that takes the current state and an action as arguments, and returns a new state result. It is a pure function that only calculates the new state based on the action and the current state.
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.item
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty:(state,action) => {
        state.cart = state.cart.map((item)=>item.id===action.payload.id ? {...item, qty: item.qty+1}:item);
    },
    decrementQty:(state,action) => {
        state.cart = state.cart.map((item)=>item.id===action.payload.id ? {...item, qty: item.qty-1}:item);
    }
  },
});

export const { addToCart, removeFromCart,incrementQty,decrementQty } = CartSlice.actions;
export default CartSlice.reducer;

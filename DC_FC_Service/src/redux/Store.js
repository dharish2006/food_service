import { configureStore } from "@reduxjs/toolkit"; // to create a store, we need to import configureStore from @reduxjs/toolkit
import CartSlice from "./slices/CartSlice"; // importing the created slice
import CategorySlice from "./slices/CategorySlice"; // importing the created slice
import SearchSlice from "./slices/SearchSlice"; // importing the created slice

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default Store;

import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";
import goodsListSliceReducer from "./slices/goodsListSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    goodsList: goodsListSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

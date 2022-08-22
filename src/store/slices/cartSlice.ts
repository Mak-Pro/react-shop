import { createSlice, current } from "@reduxjs/toolkit";

type AddedGoods = {
  id: string;
  name: string;
  description: string;
  price: {
    regularPrice: number;
    finalPrice: number;
  };
  displayAssets: {};
  quantity: number;
};

type CartType = {
  addedList: AddedGoods[];
  quantity: number;
};

const initialState: CartType = {
  addedList: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const sameGoods = state.addedList.find(
        (goods) => goods.id === action.payload.id
      );

      if (sameGoods) {
        const goodsIndex = state.addedList.findIndex(
          (goods) => goods.id === action.payload.id
        );
        state.addedList[goodsIndex].quantity =
          state.addedList[goodsIndex].quantity + 1;
      } else {
        state.addedList.push(action.payload);
      }

      state.quantity += action.payload.quantity;
    },
    decreaseQuantity(state, action) {
      const goodsIndex = state.addedList.findIndex(
        (goods) => goods.id === action.payload
      );

      if (state.addedList[goodsIndex].quantity > 1) {
        state.addedList[goodsIndex].quantity =
          state.addedList[goodsIndex].quantity - 1;
      } else {
        state.addedList.splice(goodsIndex, 1);
      }
      state.quantity = state.quantity - 1;
    },
    increaseQuantity(state, action) {
      const goodsIndex = state.addedList.findIndex(
        (goods) => goods.id === action.payload
      );

      state.addedList[goodsIndex].quantity =
        state.addedList[goodsIndex].quantity + 1;

      state.quantity = state.quantity + 1;
    },
    removeItem(state, action) {
      const goodsIndex = state.addedList.findIndex(
        (goods) => goods.id === action.payload
      );
      state.quantity = state.quantity - state.addedList[goodsIndex].quantity;
      state.addedList.splice(goodsIndex, 1);
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, API_URL } from "../../config";
import { GoodsType } from "../../types/goodsType";

axios.defaults.headers.common["Authorization"] = API_KEY;

// get initial list
export const fetchGoodsList = createAsyncThunk(
  "goodsList/fetchGoodsList",
  async (_, { rejectWithValue }) => {
    const result = await axios.get(API_URL);
    return result.data;
  }
);

type GoodsListState = {
  loading: boolean;
  list: GoodsType[];
};

const initialState: GoodsListState = {
  loading: false,
  list: [],
};

const goodsListSlice = createSlice({
  name: "goodsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get initial goods list
    builder.addCase(fetchGoodsList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGoodsList.fulfilled, (state, action) => {
      state.list = action.payload.shop;
      state.loading = false;
    });
    builder.addCase(fetchGoodsList.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// export const { addToCart } = goodsListSlice.actions;
export default goodsListSlice.reducer;

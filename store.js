import { configureStore, createSlice } from "@reduxjs/toolkit";

const bitcoinSlice = createSlice({
  name: "bitcoin",
  initialState: { price: null },
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setPrice } = bitcoinSlice.actions;

const store = configureStore({
  reducer: {
    bitcoin: bitcoinSlice.reducer,
  },
});

export default store;

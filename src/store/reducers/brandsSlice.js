import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.push(...action.payload);
    }
  },
});

export const { setBrands } = brandsSlice.actions;
export default brandsSlice.reducer;
// src/redux/rocketsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {

  },
});

export const { actions, reducer } = rocketsSlice;
export default rocketsSlice.reducer;

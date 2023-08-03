// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// import rocketsReducer from './redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    // rockets: rocketsReducer,
    // Add other reducers here if you have more slices
  },
});

export default store;

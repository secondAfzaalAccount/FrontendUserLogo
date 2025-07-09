import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../Features/ProductSlice';

const store = configureStore({
  reducer: {
    'mySlice': productSlice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import contratistasReducer from '../redux/ContratistaSlice';

export const store = configureStore({
  reducer: {
    contratistas: contratistasReducer,
  },
});
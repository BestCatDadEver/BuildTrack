import { configureStore } from '@reduxjs/toolkit';
import contratistasReducer from '../redux/ContratistaSlice';
import  frenteReducer from '../redux/frenteSlice'

export const store = configureStore({
  reducer: {
    contratistas: contratistasReducer,
    frente: frenteReducer
  },
});
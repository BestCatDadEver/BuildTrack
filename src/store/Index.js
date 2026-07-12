import { configureStore } from '@reduxjs/toolkit';
import contratistasReducer from '../redux/ContratistaSlice';
import  frenteReducer from '../redux/frenteSlice'
import ObraReducer from '../redux/ObraSlice'
import CostoReducer from '../redux/CostoSlice'


export const store = configureStore({
  reducer: {
    contratistas: contratistasReducer,
    frente: frenteReducer,
    Obra: ObraReducer,
    Costo: CostoReducer
  },
});
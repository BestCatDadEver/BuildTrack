import { createSlice } from "@reduxjs/toolkit";

const CostoSlice = createSlice({
  name: "Costo",
  initialState: {
    siguienteId: 1,
    costos: [],
  },
  reducers: {
    agregarCosto: (state, action) => {
      state.costos.push({
        id: state.siguienteId,
        ...action.payload,
      });

      state.siguienteId++;
    },

    eliminarCosto: (state, action) => {
      state.costos = state.costos.filter(
        (costo) => costo.id !== action.payload
      );
    },

    limpiarCostos: (state) => {
      state.costos = [];
      state.siguienteId = 1;
    },
  },
});

export const { agregarCosto, eliminarCosto, limpiarCostos } = CostoSlice.actions;
export default CostoSlice.reducer;
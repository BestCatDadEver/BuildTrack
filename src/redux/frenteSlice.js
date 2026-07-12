import { createSlice } from "@reduxjs/toolkit";

const frenteSlice = createSlice({
  name: "frente",
  initialState: {
    siguienteId: 1,
    frentes: [],
  },
  reducers: {
    agregarFrente: (state, action) => {
      state.frentes.push({
        id: state.siguienteId,
        ...action.payload,
        //los 3 puntos es para insertar en un objeto o array algo, osea expande los atributos
      });

      state.siguienteId++;
    },

    eliminarFrente: (state, action) => {
      state.frentes = state.frentes.filter(
        frente => frente.id !== action.payload
      );
    },

    limpiarFrentes: (state) => {
      state.frentes = [];
      state.siguienteId = 1;
    },
  },
});

export const {agregarFrente,eliminarFrente,limpiarFrentes,} = frenteSlice.actions;
export default frenteSlice.reducer;
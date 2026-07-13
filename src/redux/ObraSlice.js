import { createSlice } from "@reduxjs/toolkit"

const ObraSlice = createSlice({
  name: "Obra",
  initialState: {
    IdContratistas: [],
    Idfrentes: [],
    IdCostos: [],
    NombreObra: "",
    FechaInicio: "", 
    FechaFin: "",
  },
  reducers: {

    agregarFrenteObra: (state, action) => {
      state.Idfrentes.push(action.payload)
    },
    agregarCostoObra: (state, action) => {
      state.IdCostos.push(action.payload)
    },
    agregarContratistaObra: (state, action) => {
      state.IdContratistas.push(action.payload)
    },

    eliminarFrente: (state, action) => {
      state.Idfrentes = state.Idfrentes.filter((id) => id !== action.payload)
    },
    eliminarCosto: (state, action) => {
      state.IdCostos = state.IdCostos.filter((id) => id !== action.payload)
    },
    eliminarContratista: (state, action) => {
      state.IdContratistas = state.IdContratistas.filter((id) => id !== action.payload)
    },

    limpiarObra: (state) => {
      state.Idfrentes = []
      state.IdCostos = []
      state.IdContratistas = []
      state.NombreObra = ""
      state.FechaInicio = ""
      state.FechaFin = ""
    },
  },
})

export const { agregarFrenteObra, agregarCostoObra, agregarContratistaObra, eliminarFrente, eliminarCosto, eliminarContratista, limpiarObra } =
  ObraSlice.actions

export default ObraSlice.reducer

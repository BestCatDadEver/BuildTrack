import { createSlice } from "@reduxjs/toolkit";

const contratistasSlice = createSlice({
    name: "contratistas",
    initialState: {
        contratistasList: [],
        selectedContratista: null,
        error: null
    },
    reducers: {
        addContratista: (state, action) => {
            state.contratistasList.push(action.payload);
        },
        getContratistas: (state, action) => {
            state.contratistasList = action.payload
        },
        updateContratista: (state, action) => {
            const index = state.contratistasList.findIndex(
                c => c.id === action.payload.id
            );

            if (index !== -1) {
                state.contratistasList[index] = action.payload
            }
        },
        setSelectedContratista: (state, action) => {
            state.selectedContratista = action.payload;
        },
        clearSelectedContratista: (state) => {
            state.selectedContratista = null;
        }

    }
})

export const { addContratista, getContratistas, updateContratista, setSelectedContratista, clearSelectedContratista } = contratistasSlice.actions;
export default contratistasSlice.reducer;

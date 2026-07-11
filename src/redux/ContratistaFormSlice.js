import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database/Index";
import React from 'react'
import { useDispatch } from 'react-redux';

const contratistaFormSlice = createSlice({
    name: "contratistaForm",
    initialState: {
        contratistasList: [],
        contratista: null,
        error: null
    },
    reducers: {
        addContratista: (state, action) => {
            state.contratistasList.push(action.payload);
        },
        updateContratista: (state, action) => {
            const index = state.contratistasList.findIndex(
                c => c.id === action.payload.id
            );

            if(index !== -1) {
                state.contratistasList[index] = action.payload
            }
        },
        
        

    }
})

export const { addContratista} = contratistaFormSlice.actions;
export default contratistaFormSlice.reducer;
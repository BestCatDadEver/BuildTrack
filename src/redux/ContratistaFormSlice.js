import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database/Index";
import React from 'react'
import { useDispatch } from 'react-redux';

const contratistaFormSlice = createSlice({
    name: "contratistaForm",
    initialState: {
        contratistasList: [],
        error: null
    },
    reducers: {
        addContratista: (state, action) => {
            state.contratistasList.push(action.payload);
        },
        

    }
})

export const { addContratista} = contratistaFormSlice.actions;
export default contratistaFormSlice.reducer;
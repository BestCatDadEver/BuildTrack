import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../database/Index";
import React from 'react'
import { useDispatch } from 'react-redux';


const contratistasSlice = createSlice({
    name: "contratistas",
    initialState: {
        contratistasList: [],
        error: null
    },
    reducers: {
        addContratista: (state, action) => {
            state.contratistasList.push(action.payload);
        },
        getContratistas:(state, action) => {
            state.contratistasList = action.payload
        }

    }
})

export const { addContratista, getContratistas} = contratistasSlice.actions;
export default contratistasSlice.reducer;

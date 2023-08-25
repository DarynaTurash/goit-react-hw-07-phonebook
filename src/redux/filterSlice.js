import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilterValue(action) {
        return action.payload.toLowerCase();
        },
    },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
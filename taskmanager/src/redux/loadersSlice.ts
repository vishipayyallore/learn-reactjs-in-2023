import { createSlice } from "@reduxjs/toolkit";

export const loadersSlice = createSlice({
    name: "loaders",
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading } = loadersSlice.actions;
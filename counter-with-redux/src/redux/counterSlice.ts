import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    count: number;
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        SetCountValue(state: CounterState, action: PayloadAction<number>) {
            state.count += action.payload;
        },
    },
});

export const { SetCountValue } = counterSlice.actions;
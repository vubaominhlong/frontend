import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'book',
    initialState: { numberOfBook: 10 },
    reducers: {
        increment: (state) => {
            state.numberOfBook += 1;
        },
        decrement: (state) => {
            state.numberOfBook -= 1;
        },
        incrementByAmount: (state, action) => {
            state.numberOfBook += action.payload;
        },
    },
});

const { increment, decrement, incrementByAmount } = bookSlice.actions;
const bookReducer = bookSlice.reducer;

export {increment, decrement, incrementByAmount, bookReducer};
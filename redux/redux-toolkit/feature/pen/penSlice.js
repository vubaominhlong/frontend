import { createSlice } from "@reduxjs/toolkit";
import { decrement } from "../book/bookSlice";

const penSlice = createSlice({
    name: 'pen',
    initialState: { numberOfPen: 10 },
    reducers: {
        increasePen: (state) => {
            state.numberOfPen += 1;
        },
        decreasePen: (state) => {
            state.numberOfPen -= 1;
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(decrement, state => {
    //         state.numberOfPen --;
    //     })
    // },
});

const { increasePen, decreasePen } = penSlice.actions;
const penReducer = penSlice.reducer;

export {increasePen, decreasePen, penReducer};
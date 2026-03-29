import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            "Pizza",
            "Burger",
            "Fries"
        ],
    },
    reducers: {
        addItem:(state, action) => {
            state.items.push(action.payload);
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearItem:(state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, size,image } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                // If item already exists, update the quantity by 1
                existingItem.quantity += 1;
            } else {
                // If item doesn't exist, add it with the default quantity of 1
                state.items.push({ id,image, title, price, size, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const item = state.items.find((item) => item.id === itemId);
            if (item) {
                item.quantity = quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart,updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

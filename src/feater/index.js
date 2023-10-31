import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
    cart:[],
    items:ProductData,
    totalQuitity:0,
    totalPrice:0,
};


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) => {
            let find = state.cart.findIndex((item)=> item.id === action.payload.id);
            if(find >= 0){
                state.cart[find].quantity += 1;
            }else{
                state.cart.push(action.payload);
            }
        },

        getCartData:(state) => {
            let {totalQuitity, totalPrice} = state.cart.reduce(
                (cartTotal, cartItem) => {
                    // console.log('cartTotall', cartTotal);
                    // console.log('cartItem', cartItem);
                    const {price, quantity } = cartItem;
                    // console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuitity += quantity;
                    return cartTotal;
                },
                {
                totalPrice:0,
                totalQuitity:0
                },               
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuitity = totalQuitity;
        },

        removeItem : (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        incrementItemQuanitiy:(state,action) => {
            state.cart = state.cart.map((item) => {  
                if (item.id === action.payload) {
                    return {...item, quantity  : item.quantity + 1};
                }
                return item ;
            });
        },
        decrementItemQuanitiy:(state,action) => {
            state.cart = state.cart.map((item) => {  
                if (item.id === action.payload) {
                    return {...item, quantity : item.quantity - 1};
                }
                return item ;
            });
        }
    }
});

export const {cart, addToCart, getCartData, removeItem, incrementItemQuanitiy, decrementItemQuanitiy} = cartSlice.actions

export default cartSlice.reducer;
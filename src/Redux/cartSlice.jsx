import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};
const cartSlic = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount = state.amount + 1;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    increase: (state, action) => {
      state.amount = state.amount + 1;
      const itemIndex = state.cartItems.findIndex(
        (cartitem) => (cartitem.id === action.payload.id)
      );
      state.cartItems[itemIndex].amount++;
      let total = 0;
      total = state.cartItems[itemIndex].amount * state.cartItems.price;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => (cartItem.id === action.payload.id)
      );
      state.cartItems[itemIndex].amount > 0 &&
        state.cartItems[itemIndex].amount-- &&
        state.amount++;
    },
    remove: (state, action)=>{
        state.cartItems.map((cartitem)=>{
            if(cartitem.id  === action.payload.id){
                state.cartItems = state.cartItems.filter((item)=> item.id !== cartitem.id)
                state.amount = state.amount - cartitem.amount
            }
        })
    },
    total: (state)=>{
        let total =0;
        state.cartItems.forEach((cartitem)=>{
            total += cartitem.amount * cartitem.price
        });
        state.total= total;
    },
    clear:(state)=>{
        state.cartItems= [],
        state.amount= 0

    }
    
  },
});
export const { add, increase, decrease, remove, total, clear } = cartSlic.actions;
export default cartSlic.reducer;

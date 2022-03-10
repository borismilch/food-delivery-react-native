import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFood } from '../../models'

interface CartSliceState {
  cartItems: {[key: string]: IFood},
}

const initialState: CartSliceState = {
  cartItems: {}
}

const slice =  createSlice({
  name: "CardSlice",
  initialState,
  reducers: {
    addItemsToCart: (state, action: PayloadAction<IFood>) => {
      console.log(action, state.cartItems, state.cartItems.length)
      state.cartItems[action.payload.title] = action.payload
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      delete state.cartItems[action.payload]
     
    },

    clearAllItems: (state) => {
      state.cartItems = {}
    },
  }
})

export default slice.reducer

export const CartStore = slice.actions
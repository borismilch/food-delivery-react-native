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
    addItemsToCart: (state, action: PayloadAction<[IFood, string]>) => {
      state.cartItems[action.payload[0].title + action.payload[1] ] = action.payload[0]
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      delete state.cartItems[action.payload]
      console.log(action.payload)
    },

    clearAllItems: (state) => {
      state.cartItems = {}
    },
  }
})

export default slice.reducer

export const CartStore = slice.actions
import { combineReducers } from "@reduxjs/toolkit";
import locationReducer from './slices/location.slice'
import cartReducer from "./slices/cart.slice";

export const rootReducer = combineReducers({
  location: locationReducer,
  cart: cartReducer
})
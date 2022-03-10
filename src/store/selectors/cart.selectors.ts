import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const cartItemsSelector = createSelector(
  (state: RootState) => state.cart,
  (cart) =>cart.cartItems 
)

export const totalPrice = createSelector(
  (state: RootState) => state.cart,
  (cart) => {
    const total =  Object.values(cart.cartItems).reduce((acc, item, idx, arr) => acc += +item.price.replace("$", "") ,0).toLocaleString("en", {
      style: "currency",
      currency: "USD"
    })

    console.log(total)
    return total
  }
)
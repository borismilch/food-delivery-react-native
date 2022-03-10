import { firestore } from "../lib/firebase";
import { doc, collection, addDoc } from 'firebase/firestore'
import { IOrder } from "../models";

import { store } from "../store/store";
import { CartStore }  from '../store/actions'

export default class OrderService {
  static async addOrder (order: IOrder) {
    try {
      const collectionref = collection(firestore, "orders")
      await addDoc(collectionref, order)
  
      store.dispatch(CartStore.clearAllItems())
    } catch (e) {
      console.log(e)
    }
  }
}
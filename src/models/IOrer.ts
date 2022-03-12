import { IFood } from "./IFood";

export interface IOrder {
  totalPrice: number,
  items: IFood[],
  createdAt: number,
  restaurant: string,
  receiver: string,
  id: string,
  restaurantImage: string
}
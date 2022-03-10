import { IFood } from "./IFood";

export interface IOrder {
  totalPrice: number,
  items: IFood[],
  createdAt: { seonds: number },
  restaurant: string,
  receiver: string
}
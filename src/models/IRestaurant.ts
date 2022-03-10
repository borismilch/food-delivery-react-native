export interface IRestaurant {
  name: string,
  categories: ICategory[],
  image_url: string,
  rating: number,
  reviews: number
  price: string
}

export interface ICategory {
  alias: string,
  title: string
}
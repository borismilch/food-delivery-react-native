import { IRestaurant } from "../models"

const YIELP_CLIENT_ID = "A3rgMCfkzjYqQTD22lnWxg"
const YIELP_CLIENT_SECRET = "S88o3-9NZxpE_prsTCahK8oJd0QvLQLkRNnzuenaa_rt97z_XKXEAdHzeW6B4PchKqRh3_9dlAo7DYQ4ZSywDSE9UZsYMZdJ5ZHdwuCAZDO9auVtk2GEFFZW990oYnYx"

const apiOptions = {
  headers: {
    Authorization: "Bearer " + YIELP_CLIENT_SECRET
  }
}

export default class RestaurantService {
  static async getRestaugants(location: string = "SanDiego"): Promise<{businesses: IRestaurant[]}> {
    const API_URL = `https://api.yelp.com/v3/businesses/search?tern=rentaurants&location=${location ? location : "SanDiego"}`
    
    const res = await fetch(API_URL, apiOptions)
    return await res.json()
  }
}
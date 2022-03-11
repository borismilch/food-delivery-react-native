import { IRestaurant } from "../models"

const YIELP_CLIENT_ID = "A3rgMCfkzjYqQTD22lnWxg"
const YIELP_CLIENT_SECRET = "hr3bo31vmGX7fcMKe89aZSyYws0iKyHjru6Ao4cpjvjoZWl_ws7xL8nnHUmWJ2IX6lyhBShFwvXmx5kYp6l98FIMwUMtMpxQFHn8bEWFC-alFD-vNPv5ZHZsPt8qYnYx"
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
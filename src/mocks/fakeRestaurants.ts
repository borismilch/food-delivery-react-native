import { IRestaurant } from "../models";

export const fakeRestaurants: IRestaurant[] = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: [
      {
        title: "Cafe",
        alias: "cafe"
      },
      {
        title: "Bar",
        alias: "bar"
      }
    ],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: [
        {
          title: "Cafe",
          alias: "cafe"
        },
        {
          title: "Bar",
          alias: "bar"
        }
      ],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: [
        {
          title: "Cafe",
          alias: "cafe"
        },
        {
          title: "Bar",
          alias: "bar"
        }
      ],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
]

export const [fakeRestaurant] = fakeRestaurants
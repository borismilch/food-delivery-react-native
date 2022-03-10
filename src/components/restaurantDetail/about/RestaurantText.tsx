import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IRestaurant } from '../../../models'

interface RestaurantDescriptionProps {
  restaurant: IRestaurant
}

const RestaurantDescription: React.FC<RestaurantDescriptionProps> = (props) => {
  const { restaurant: {categories, name, price, rating, reviews} } = props
  const formattedCategories = categories.map(item => item.title)

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews || Math.floor(Math.random() * 1000)}+)`

  return (
    <View>
       <View>
         <Text style={styles.title}>{name}</Text>
       </View>

       <View>
         <Text style={styles.description}>{description}</Text>
       </View>
     
    </View>
  )
}

export default RestaurantDescription

const styles = StyleSheet.create({
  wrapper: {

  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  description: {
    marginBottom: 20,
    marginHorizontal: 15,
    fontSize: 15.5,
    color: "gray",
    fontWeight: "bold",
    
  }
})
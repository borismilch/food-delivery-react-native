import { View, StyleSheet } from 'react-native'
import React from 'react'
import { RestaurantImage, RestaurantText } from '.'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IRestaurant } from '../../../models'

const About = () => {
  const {params} = useRoute<RouteProp<{params: {restaurant: IRestaurant}}>>()

  return (
    <View>
      <RestaurantImage image={params?.restaurant.image_url} />

      <RestaurantText restaurant={params?.restaurant} />
    </View>
  )
}

export default About
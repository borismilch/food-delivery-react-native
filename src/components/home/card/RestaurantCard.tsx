import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RestaurantCardFooter, RestaurantCardImage } from '.'
import { IRestaurant } from '../../../models'
import { TouchableOpacity } from 'react-native'
import { useRouting } from '../../../hooks'

interface RestaurantCardProps {
  restaurant: IRestaurant
} 

const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  const { restaurant } = props
  
  const { navigateTo } = useRouting()

  return (
    <TouchableOpacity onPress={navigateTo("detail", {restaurant})} style={styles.container} activeOpacity={1} >
      <View style={styles.wrapper}>
        <RestaurantCardImage restaurant={restaurant} />
        <RestaurantCardFooter restaurant={restaurant} />
      </View>
    </TouchableOpacity>  
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15
  },
  container: {
    marginVertical: 10,
   
  }
})
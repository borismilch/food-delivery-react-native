import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IRestaurant } from '../../../models'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface CardImageProps {
  restaurant: IRestaurant
} 

const CardImage: React.FC<CardImageProps> = (props) => {
  const { restaurant } = props

  return (
    <>
      <Image 
        style={styles.image} 
        source={{uri: restaurant?.image_url}} 
      />
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons name='heart-outline' size={25} color={"white"} />
      </TouchableOpacity>

    </>
  )
}

export default CardImage

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 20
  }
})
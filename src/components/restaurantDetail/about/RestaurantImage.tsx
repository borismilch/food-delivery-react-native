import { StyleSheet, Image} from 'react-native'
import React from 'react'

interface ImageProps {
  image: string
}

const RestaurantImage: React.FC<ImageProps> = (props) => {
  const { image } = props
  return (
    <Image style={styles.image} source={{uri: image}} />
  )
}

export default RestaurantImage

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180
  }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { IOrder } from '../../models'

interface LastOrderProps {
  order?: IOrder
}

const LastOrder: React.FC<LastOrderProps> = (props) => {
  const { order } = props

  useEffect(() => {
    console.log(order)
  }, [order])

  return (
    <View style={styles.wrapper}>
     { order && <Image style={styles.image} source={{uri: order?.restaurantImage}} />}
    </View>
  )
}

export default LastOrder

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  image: {
    width: "100%",
    height: 400,
  }
})
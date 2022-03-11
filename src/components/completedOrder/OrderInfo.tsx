import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IOrder } from '../../models'

interface OrderInfoProps {
  restaurant: string,
  totalPrice: number
}

const OrderInfo: React.FC<OrderInfoProps> = (props) => {
  const { restaurant, totalPrice } = props

  return (
    <View style={styles.wrapper}>
       <Text style={styles.text}>
         Your order at {restaurant} has been placed for {"$" + totalPrice }
       </Text>
    </View>
  )
}

export default React.memo(OrderInfo)

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
   
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IFood } from '../../../../models'

interface OrderItemProps {
  item: IFood
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { item } = props

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginRight: 30,
    borderBottomWidth: 0.7,
    borderBottomColor: "#999"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    opacity: 0.7,
    fontSize: 16
  }
})
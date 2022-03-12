import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IOrder } from '../../models'
import { Divider } from 'react-native-elements'
import { useRouting } from '../../hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface OrderItemProps {
  order: IOrder
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { order } = props
  const { navigateTo } = useRouting()

  return (
    <>
      <TouchableOpacity onPress={navigateTo("completed", { order })} style={styles.wrapper}>

        <View style={styles.sumWrapper}>
          <Text style={styles.orderPlace}>{order.restaurant}</Text>

          <Text>{order.items.length} product{ order.items.length > 1 && "s"}</Text>

          <Text style={styles.orderTotal}>Total: {"$" +order.totalPrice}</Text>
        </View>

        <Image style={styles.image} source={{uri: order.restaurantImage}} />

      </TouchableOpacity>
      <Divider width={0.5} orientation="vertical" />
    </>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
   
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8
  },

  orderPlace: {
    fontWeight: "bold",
    fontSize: 17
  },

  sumWrapper: {
    height: "100%"
  },

  listWrapper: {
    paddingTop: 12,
    paddingLeft: 12,
    flex: 1
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    width: 170,
    justifyContent: "space-between"
  },

  orderTotal: {
    fontSize: 16,
    marginTop: 12,
    fontWeight: "bold"
  }
})


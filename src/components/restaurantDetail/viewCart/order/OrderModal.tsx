import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IOrder, IRestaurant } from '../../../../models'
import { OrderItem } from '..'
import { useAppSelector } from '../../../../hooks/redux'
import { cartItemsSelector, totalPrice } from '../../../../store/selectors'
import { styles } from './OrderModalStyle'
import { OrderService } from  '../../../../service'
import { serverTimestamp } from 'firebase/firestore'
import { useRouting } from '../../../../hooks/index'

interface OrderModalProps {
  onPress: () => void
}

const OrderModal:React.FC<OrderModalProps> = (props) => {
  const { onPress } = props
  const { params } = useRoute<RouteProp<{params:{ restaurant: IRestaurant}}>>()
  const { navigateTo } = useRouting()

  const orderItems= useAppSelector(cartItemsSelector)
  const total = useAppSelector(totalPrice)

  const createNewOrder = async () => {
    const newOrder: IOrder = {
      createdAt: serverTimestamp() as any,
      items: Object.values(orderItems),
      receiver: "annonymus",
      restaurant: params.restaurant.name,
      totalPrice: +total
    } 

    await OrderService.addOrder(newOrder)
    onPress()
    navigateTo("completed", {order: newOrder})()
  }

  return (
    <View style={styles.modalContainer}>
       
      <View style={styles.modalCheckoutContainer}>
        <Text 
          style={styles.restaurantName}
        >
          {params?.restaurant.name}
        </Text>

        {
          Object.values(orderItems).map(item => (
           <OrderItem item={item} />
          ))
        }
       
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={{marginRight: 40, ...styles.subtotalText}}>{"$" + total}</Text>
        </View>

        <View style={styles.button}>

          <TouchableOpacity onPress={createNewOrder} style={{
            ...styles.buttonText,
            justifyContent: "center",
            marginRight: 40
          }}>
            <Text style={{color: "white", fontWeight: "bold"}}> Checkout</Text>
            <Text style={styles.text}>{"$" + total}</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

export default OrderModal
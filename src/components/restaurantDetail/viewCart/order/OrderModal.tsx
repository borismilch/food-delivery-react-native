import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IOrder, IRestaurant } from '../../../../models'
import { OrderItem } from '..'
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux'
import { cartItemsSelector, totalPrice } from '../../../../store/selectors'
import { styles } from './OrderModalStyle'
import { OrderService } from  '../../../../service'
import { useRouting } from '../../../../hooks/index'
import { CartStore } from '../../../../store/actions'
import { useState } from 'react'
import { OrderLoader } from '..'
import { auth } from '../../../../lib/firebase'

interface OrderModalProps {
  onPress: () => void
}

const OrderModal:React.FC<OrderModalProps> = (props) => {
  const { onPress } = props
  const { params } = useRoute<RouteProp<{params:{ restaurant: IRestaurant}}>>()
  const { navigateTo } = useRouting()
  const [loading, setLoading] = useState<boolean>(false) 

  const dispatch = useAppDispatch()
  const orderItems= useAppSelector(cartItemsSelector)
  const total = useAppSelector(totalPrice)

  const createNewOrder = () => {
    const newOrder: IOrder = {
      createdAt: Date.now(),
      items: Object.values(orderItems),
      receiver: auth?.currentUser?.uid + "",
      restaurant: params.restaurant.name,
      restaurantImage: params.restaurant.image_url,
      totalPrice: +total,
      id: ""
    } 

    setLoading(true)

    setTimeout(async() => {
      await OrderService.addOrder(newOrder)
      dispatch(CartStore.clearAllItems())
      onPress()
      setLoading(false)
      navigateTo("completed", {order: newOrder})()
    }, 1500)
  }

  return (
    <>
    <View style={styles.modalContainer}>
      <View style={styles.modalCheckoutContainer}>
        <Text 
          style={styles.restaurantName}
        >
          {params?.restaurant.name}
        </Text>

        {
          Object.values(orderItems).map((item, idx) => (
           <OrderItem key={item.title + idx.toString()} item={item} />
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

     {loading && <OrderLoader  />}
    </>
  )
}

export default OrderModal
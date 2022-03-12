import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React from 'react'

import LottieView from 'lottie-react-native'
import { OrderInfo, OrderItems, OrderGoBack } from '../components'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IOrder } from '../models'

const OrderCompletedScreen = () => {
  const {params} = useRoute<RouteProp<{params: {order: IOrder}}>>()

  return (
    <SafeAreaView style={styles.vedroidSafeArea}>

      <LottieView 
        style={{width: 100, height: 100, alignSelf: "center"}} 
        speed={0.5} 
        source={require("../assets/animations/check-mark.json")} 
        autoPlay 
        loop={false}
      />

      <OrderInfo restaurant={params.order.restaurant} totalPrice={params.order.totalPrice} />
      <OrderItems orderedFood={params.order.items} />
      <OrderGoBack />
      
      <LottieView 
        style={styles.check} 
        speed={0.5} 
        source={require("../assets/animations/cooking.json")} 
        loop autoPlay 
      />
    </SafeAreaView>
  )
}

export default OrderCompletedScreen

const styles = StyleSheet.create({
  vedroidSafeArea: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: "white",
  
  },

  check: {
    height: 90,
    width: 100,
    flex: 1,
    alignSelf: 'center',
  },

})
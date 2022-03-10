import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React from 'react'

import LottieView from 'lottie-react-native'
import { OrderInfo, OrderItems } from '../components'


const OrderCompletedScreen = () => {

  return (
    <SafeAreaView style={styles.vedroidSafeArea}>

      <LottieView 
        style={styles.check} 
        source={require("../assets/animations/check-mark.json")} 
        speed={0.5} 
        loop={false} 
        autoPlay 
      />

      <OrderInfo />

      <OrderItems />

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
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: "white",
    height:  "100%"
  },

  check: {
    height: 100,
    width: 100,
    flex: 1,
    alignSelf: 'center',
    marginBottom: 30
  }

})
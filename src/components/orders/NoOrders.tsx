import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const NoOrders = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>No orders found</Text>

      <LottieView autoPlay loop={false} style={styles.box}  source={require("../../assets/animations/61171-box-product.json")} />
    </View>
  )
}

export default NoOrders

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
    
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "gray",
    marginBottom: 20
  },

  box: {
    height: 250,
    width: 250,
    marginBottom: 170
    
  }
})
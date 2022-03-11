import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const OrderLoader = () => {
  return (
    <View style={styles.wrapper}>
       <LottieView style={styles.loader} autoPlay loop source={require("../../../../assets/animations/scanner.json")} />
    </View>
  )
}

export default OrderLoader

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: 'center'
  },
  loader: {
    height: 150,
    width: 150,

  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { About } from '../components/restaurantDetail'
import { Divider } from 'react-native-elements'
import { Menu, ViewCart } from '../components'

const RestaurantDetail = () => {
  return (
    <View style={styles.wrapper}>
      <About />
      <Divider width={1} />

      <Menu />

      <ViewCart />
    </View>
  )
}

export default RestaurantDetail

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { About } from '../components/restaurantDetail'
import { Divider } from 'react-native-elements'
import { Menu, ViewCart } from '../components'
import { GoBack } from '../components/reusable'

const RestaurantDetail = () => {
  return (
    <View style={styles.wrapper}>
      <GoBack />

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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { IOrder } from '../../models'

const OrderInfo = () => {

  const {params} = useRoute<RouteProp<{order: IOrder}>>(props)
  const {   } = []
  
  return (
    <View>
      <Text>OrderInfo</Text>
    </View>
  )
}

export default OrderInfo

const styles = StyleSheet.create({})
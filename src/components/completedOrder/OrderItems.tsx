import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MenuItem } from '../restaurantDetail/menu'
import { IFood } from '../../models'

interface OrderItemsProps {
  orderedFood: IFood[]
}

const OrderItems: React.FC<OrderItemsProps> = (props) => {
  const { orderedFood } = props
  
  return (
    <ScrollView style={styles.wrapper}>
      {
        orderedFood.map((item, idx) => (
          <MenuItem key={idx} isOrder food={item}  />
        ))
      }
    </ScrollView>
  )
}

export default OrderItems

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: 310
  }
})
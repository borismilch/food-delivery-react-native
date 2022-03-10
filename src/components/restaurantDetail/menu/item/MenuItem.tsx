import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IFood } from '../../../../models'
import { MenuItemInfo } from '..' 
import { Divider } from 'react-native-elements'
import BouncyCheckBox from "react-native-bouncy-checkbox"

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { cartItemsSelector } from '../../../../store/selectors'
import { CartStore } from '../../../../store/actions'

interface MenuitemProps {
  food: IFood,
  index: number,
  isOrder: boolean
}

const MenuItem: React.FC<MenuitemProps> = (props) => {
  const { food, isOrder } = props

  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(cartItemsSelector) 

  const checkItem = () => {
    if (cartItems[food.title]) {
      dispatch(CartStore.removeItemFromCart(food.title))
    } else {
      dispatch(CartStore.addItemsToCart(food))
    }
  }

  return (
    <>
    <View style={styles.wrapper}>

      {!isOrder && <BouncyCheckBox 
        iconStyle={{ borderColor: "lightgray", borderRadius: 4 }}
        fillColor="green"
        onPress={checkItem}
        isChecked={!!cartItems[food.title]}
      />}
      
      <MenuItemInfo food={food} />

      <Image style={styles.image} source={{uri: food.image}} />
    </View>
      <Divider width={0.5} orientation="vertical" />
    </>

  )
}

export default MenuItem

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
   
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8
  }
})


import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IFood, IRestaurant } from '../../../../models'
import { MenuItemInfo } from '..' 
import { Divider } from 'react-native-elements'
import BouncyCheckBox from "react-native-bouncy-checkbox"

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { cartItemsSelector } from '../../../../store/selectors'
import { CartStore } from '../../../../store/actions'
import { RouteProp, useRoute } from '@react-navigation/native'

interface MenuitemProps {
  food: IFood,
  isOrder?: boolean
}

const MenuItem: React.FC<MenuitemProps> = (props) => {
  const { food, isOrder = false } = props
  const {params} = useRoute<RouteProp<{params: {restaurant: IRestaurant}}>>()

  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(cartItemsSelector) 

  const checkItem = () => {
    console.log(cartItems[food.title + params.restaurant.name], cartItems)
    if (cartItems[food.title + params.restaurant.name]) {
      
      dispatch(CartStore.removeItemFromCart(food.title + params.restaurant.name))
    } else {
      dispatch(CartStore.addItemsToCart([food, params.restaurant.name]))
    }
  }

  return (
    <>
    <View style={styles.wrapper}>

      {!isOrder && <BouncyCheckBox 
        iconStyle={{ borderColor: "lightgray", borderRadius: 4 }}
        fillColor="green"
        onPress={checkItem}
        isChecked={!!cartItems[food.title + params.restaurant.name + '']}
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


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IFood } from '../../../../models'

interface MenuItemTextProps {
  food: IFood
}

const MenuItemText: React.FC<MenuItemTextProps> = (props) => {
  const { food } = props
  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.description}>{food.description}</Text>
      <Text style={styles.price}>{food.price}</Text>

    </View>
  )
}

export default MenuItemText

const styles = StyleSheet.create({
  wrapper: {
    width: 220,
    justifyContent: "space-evenly"
  },

  title: {
    color: "gray",
    fontSize: 19,
    fontWeight: "bold"
  },
  description: {
    color: "gray"

  },
  price: {
    color: "gray"
    
  },

})
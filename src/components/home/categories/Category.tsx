import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ICategory } from '../../../models'

interface CategoryItemsProps {
  category: ICategory
}

const Category: React.FC<CategoryItemsProps> = (props) => {
  const { category } = props

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={category.image} />
      <Text style={styles.text}>{category.text}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginRight: 35
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold"
  }
})
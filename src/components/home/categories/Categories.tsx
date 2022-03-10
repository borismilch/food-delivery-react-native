import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { items } from './items'
import { Category } from '.'

const Categories = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          items.map(category => (
            <Category category={category} key={category.text} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 25
  }
})
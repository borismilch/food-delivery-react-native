import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IRestaurant } from '../../../models'

interface CardFooterProps {
  restaurant: IRestaurant
}

const RestaurantInfo: React.FC<CardFooterProps> = (props) => {
  const { restaurant } = props
  return (
    <View style={styles.wrapper}>

      <View >
        <Text style={styles?.name}>{restaurant?.name}</Text>
        <Text style={styles?.description}>{restaurant?.categories.map(item => item.alias).join(", ")}</Text>
      </View>

      <View style={styles.raiting}>
       <Text style={styles.rait}>{restaurant?.rating}</Text>  
      </View>
    </View>
  )
}

export default RestaurantInfo

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  container: {

  },

  raiting: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  rait: {
    fontWeight: "bold",
    color: "#151515"
  },

  name: {
    fontSize: 15,
    fontWeight: "bold"
  },
  description: {
    fontSize: 13,
    color: "gray"
  }

})
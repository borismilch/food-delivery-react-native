import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

import { RestaurantCard } from '.'
import { RestaurantService } from '../../../service'
import { useState } from 'react'
import { IRestaurant } from '../../../models'

import { useAppSelector } from '../../../hooks/redux'
import { locationSelector } from '../../../store/selectors'
import { fakeRestaurants } from '../../../mocks'
fakeRestaurants

const RestaurantList = () => {

  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])
  const  location = useAppSelector(locationSelector)

  const fetchRestaurants = async () => {
    const data = {businesses: fakeRestaurants} //await RestaurantService.getRestaugants(location)  

    setRestaurants(data.businesses)
  }
  
  useEffect(() => {
    fetchRestaurants()
  }, [fetchRestaurants, location])

  return (
    <View>
      {
        restaurants?.map((item, idx) => (
          <RestaurantCard key={idx} restaurant={item} />
        ))
      }
    </View>
  )
}

export default RestaurantList

const styles = StyleSheet.create({
  wrapper: {}
})
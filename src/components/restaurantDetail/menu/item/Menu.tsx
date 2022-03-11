import { StyleSheet } from 'react-native'
import React from 'react'
import { MenuItem } from '..'
import { fakeFood } from '../../../../mocks'
import { ScrollView } from 'react-native-gesture-handler'

const Menu = () => {
  return (
    <ScrollView style={{paddingTop: 10, paddingBottom: 100}} showsVerticalScrollIndicator={false}>
      {
        fakeFood.map((item, idx) => (
          <MenuItem key={idx} food={item} />
        ))
      }
    </ScrollView>
  )
}

export default Menu


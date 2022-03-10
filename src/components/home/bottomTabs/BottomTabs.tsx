import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabsItem} from '.'
import { tabs } from './tabs'

const BottomTabs = () => {
  return (
    <View style={styles.wrapper}>

      {
        tabs.map((item, idx) => (
          <TabsItem key={idx} tab={item} />
        ))
      }
       
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between"
  }
})
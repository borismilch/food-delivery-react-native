import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderButton } from '.'
import { useState } from 'react'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("Delivery")

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <View style={styles.wrapper} >
      <HeaderButton title='Delivery' onPress={changeActiveTab} activeTab={activeTab} />
      <HeaderButton title='Pickup' onPress={changeActiveTab} activeTab={activeTab} />
    </View>
  )
}

export default HeaderTabs

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row", 
    alignSelf: "center"
  }
})
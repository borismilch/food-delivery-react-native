import { StyleSheet, View, SafeAreaView, Platform, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/home/header/Tabs'
import { SearchBar, Categories, RestaurantList, BottomTabs } from '../components'
import { Divider }  from 'react-native-elements'
import { RouteProp, useRoute } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

const HomeScreen = () => {

  const { params } = useRoute<RouteProp<{params: {greet: { title: string }}}>>()

  useEffect(() => {
    if (params?.greet) {
      Toast.show({
        type: "success",
        text1: params.greet.title
      })
    }
  }, [])

  return (
    <SafeAreaView style={styles.vedroidSafeArea}>

      <View style={styles.tabsWrapper}>
        <HeaderTabs />
        <SearchBar />
      </View>
      
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        
        <RestaurantList />
      
      </ScrollView>
      <Divider width={0.7} />

      <BottomTabs />
     
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  vedroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: "#eee",
  },

  tabsWrapper: {
    backgroundColor: "white",
    padding: 15
  }

})
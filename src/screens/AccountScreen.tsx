import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AccountOrders, AccountUser, ChangeAccount } from '../components/account'
import { GoBack } from '../components/reusable'

const AccountScreen = () => {
  return (
    <View style={styles.wrapper}>
      <GoBack />

      <AccountUser />

      <AccountOrders />

      <ChangeAccount />
     
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "linear-gradient(180deg, rgba(50,131,61,1) 0%, rgba(34,179,76,1) 100%)",
 
  }
})
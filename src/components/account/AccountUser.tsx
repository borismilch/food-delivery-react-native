import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import  { useAuthState } from '../../hooks'
import { Avatar, FAB } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../lib/firebase'

const AccountUser = () => {

  const {user} = useAuthState()

  return (
    <>
    <View style={styles.wrapper}>
      <Avatar rounded size={100} source={{ uri: user?.photoURL + "" }} />

      <Text style={styles.username}>
        {user?.displayName}
      </Text>

      <Text style={styles.email}>
        {user?.email}
      </Text>

    </View>
    </>

  )
}

export default AccountUser

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  username: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 10,
    fontWeight: "bold",
    color: "white"
  },

  email: {
    textAlign: "center",
    fontSize: 17,

    fontWeight: "bold",
    color: "white",
    opacity: 0.7
  }
})
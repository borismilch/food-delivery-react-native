import { StyleSheet } from 'react-native'
import React from 'react'
import { useRouting } from '../../hooks'
import { Button } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../lib/firebase'

const GoogleLogin = () => {
  const { navigateTo } = useRouting()

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)

    navigateTo("home")()
  }

  return (
    <Button
      onPress={() => signInWithGoogle()}
      title="Sing in with Google"
      icon={<FontAwesome name='google' size={24} />}
      buttonStyle={{
        backgroundColor: '#e4e4e7',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 30,
      }}
      containerStyle={{
        width: 300,
        alignSelf: "center"
      }}
      titleStyle={{ marginHorizontal: 20, color: 'black' }}
  />
    
  )
}

export default GoogleLogin

const styles = StyleSheet.create({})
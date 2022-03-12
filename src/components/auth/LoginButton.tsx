import { StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

interface LoginButtonProps {
  onPress: () => void,
  text: string,
  loading: boolean
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
  const { onPress, text, loading = false } = props

  return (
    <>
      <Button
        disabledStyle={{ borderColor: "transparent"}}
        loading={loading}
        onPress={loading ? () => {} : onPress}
        title={text}
        buttonStyle={{
          backgroundColor: '#059669',
          borderWidth: 2,
          borderColor: '#059669',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          alignSelf: "center"
        }}
        titleStyle={{ fontWeight: 'bold' }}
      />


  </>
  )
}

export default LoginButton

const styles = StyleSheet.create({

})
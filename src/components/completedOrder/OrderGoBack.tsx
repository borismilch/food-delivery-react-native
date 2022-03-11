import React from 'react'
import { Button } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import { useRouting } from '../../hooks'

const OrderGoBack = () => {

  const { navigateTo } = useRouting()

  return (
    <Button
      onPress={navigateTo("home")}
      title="Go back"
      icon={<FontAwesome name='arrow-left' size={20} color={"white"} />}
      buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
      containerStyle={{
        height: 40,
        overflow: "hidden", 
        marginTop: 20,
        alignSelf: "center",
        width: 300,
        borderRadius: 30
      }}
      titleStyle={{
        color: 'white',
        marginHorizontal: 7,
      }}
    />
   
  )
}

export default React.memo(OrderGoBack)

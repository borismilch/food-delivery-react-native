import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TabsItem} from '.'
import { tabs } from './tabs'
import { Avatar } from 'react-native-elements'
import FontAwesome  from 'react-native-vector-icons/FontAwesome5'
import { useAuthState } from '../../../hooks'
import { auth } from '../../../lib/firebase'
import { useToggle } from '../../../hooks'

const BottomTabs = () => {
  const { user } = useAuthState()
  const [value, toggle] = useToggle(false)

  const lasttab =  {
    ActiveIcon: user ? <Avatar size={27} source={{uri: user.photoURL + ''}} /> : <FontAwesome size={25} name="user" />,
    text: user ?  user.displayName + '' : "Account",
    to: user ? "account"  : 'login'
  }

  useEffect(() => {
    setTimeout(() => toggle(), 2000)
  }, [user, auth.currentUser])

  return (
    <View style={styles.wrapper}>

      {
        [...tabs, lasttab].map((item, idx) => (
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
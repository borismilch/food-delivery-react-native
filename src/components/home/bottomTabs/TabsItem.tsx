import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITab } from '../../../models'
import { useRouting } from '../../../hooks'
import { TouchableOpacity } from 'react-native'

interface TabsItemProps {
  tab: ITab
}

const TabsItem: React.FC<TabsItemProps> = (props) => {
  const { tab } = props
  const { route, navigateTo } = useRouting()

  const isActive = route.name === tab.to
  const iconStyle = isActive ? styles.activeIcon : styles.basicIcon

  return (
    <TouchableOpacity onPress={navigateTo(tab.to)}>
      <View style={{...styles.wrapper, ...iconStyle}}>
        
        <View>
          {tab.ActiveIcon}
        </View>

        <Text>{tab.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TabsItem

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center"
  },
  activeIcon: {

  },
  basicIcon: {
    opacity: .4
  }
})
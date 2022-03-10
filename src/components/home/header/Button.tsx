import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface HeaderButtonProps {
  activeTab: string,
  onPress?: (val: string) => void,
  title: string
}

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {

  const { activeTab, onPress = () => {}, title } = props
  const isActive = activeTab === title
  const activeStyles = isActive ? styles.activeButton : styles.basicButton 
  const textStyles = isActive ? styles.activeText : styles.basicText

  const changeActiveTab = () => {
    onPress(title)
  }

  return (
    <TouchableOpacity style={activeStyles} onPress={changeActiveTab} >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  )
}

export default HeaderButton

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  basicButton: {
    backgroundColor: "transparent",
    paddingVertical: 6,
    paddingHorizontal: 12
 },

 activeText: {
   fontWeight: "bold",
   fontSize: 15,
   color: "white"
 },
  basicText: {
   fontWeight: "bold",
   fontSize: 15,
   color: "black"
 }
  
})
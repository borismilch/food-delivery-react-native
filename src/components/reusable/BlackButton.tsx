import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface BlackButtonProps {
  onPress?: () => void,
  text1: string,
  text2: string
}

const BlackButton: React.FC<BlackButtonProps> = (props) => {
  const { onPress = () => {}, text1, text2 } = props

  return (
    <View style={styles.locator}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.wrapper}>
          <Text style={styles.text}>{text1}</Text>
          <Text style={styles.total}>{text2}</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default BlackButton

const styles = StyleSheet.create({
  locator: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    alignItems: "center",
    justifyContent: 'center'
  },
  wrapper: {
    
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    position: 'relative',
    width: 300,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
  },

  container: {
    flexDirection: "row", 
    justifyContent: "center",
    width: "100%"
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
    
    
  },
  total: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
    marginLeft: 40,
    opacity: .7,
    width: 50,
    position: "absolute",
    right: 10
  }
})
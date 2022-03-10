import { StyleSheet, Text, View } from 'react-native'
import React, { ChangeEvent } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useInputValue } from '../../hooks'
import { useAppDispatch } from '../../hooks/redux'
import { LocationStore } from '../../store/actions'

const SearchBar = () => {

  const [value, bind] = useInputValue()
  const dispatch = useAppDispatch()

  return (
    <View style={styles.wrapper}>
       <GooglePlacesAutocomplete 
         query={{key: "AIzaSyDMVl9DTUO7s579B868xPbXSJAwGeYVwgg"}}
          textInputProps={{
            onChangeText: bind.onChangeText,
            
            onSubmitEditing: () => {
              dispatch(LocationStore.setLocation(value))
            }
          }}
          placeholder='Search for delivery...'
          styles={inputStyles}
          
          renderLeftButton={() => (
            <View style={{marginLeft: 10}}>
              <Ionicons name='location-sharp' size={24} />
            </View>
          )}

          renderRightButton={() => (
            <View style={styles.badge}>
              <AntDesign name='clockcircle' size={11} />
              <Text style={{marginLeft: 5}}>Search</Text>
            </View>
          )}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    flexDirection: "row"
  },

  badge: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    alignItems: "center"
  }

})

const inputStyles = StyleSheet.create({
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
     marginRight: 10
  }
})
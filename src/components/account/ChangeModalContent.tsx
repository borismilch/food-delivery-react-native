import { StyleSheet, View , Button, Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Input } from 'react-native-elements'
import { auth } from '../../lib/firebase'
import * as ImagePicker from 'expo-image-picker';
import { useInputValue } from '../../hooks';
import { UserService } from '../../service'
import { Button as BButton } from 'react-native-elements'
import { updateProfile } from 'firebase/auth';

interface ChangeModalContentProps { 
  onClose: () => void
}

const ChangeModalContent: React.FC<ChangeModalContentProps> = (props) => {
  const { onClose } = props
  const [name, bindChangeName, _, isNameError] = useInputValue(auth.currentUser?.displayName? auth.currentUser.displayName : "")
  const [image, setImage] = useState<string>(auth.currentUser?.photoURL? auth.currentUser.photoURL : "")
  const [loading, setLoading] = useState<boolean>(false) 

  const uploadFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  
  const takeAPhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const saveChanges = async () => {
    setLoading(true)
    
    await updateProfile(auth.currentUser!, {
      photoURL: image,
      displayName: name
    })

    onClose()
    setLoading(false)
  }

    useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
         
        <View style={styles.imageWrapper}>
          <Avatar size={105} rounded source={{ uri: image }} />

          <View style={{marginLeft: 20}}>
            <Button  onPress={uploadFile} title='Choose file' />

            <View style={{marginBottom: 10 }}></View>

            <Button onPress={takeAPhoto} title='Take a photo' />
          </View>
        </View>

       <Input 
          label="Name"
          style={styles.input} 
          inputContainerStyle={styles.inputContainerStyle}  
          {...bindChangeName} 
          errorMessage={ isNameError ? "password is required must be more than 8 symbols" : ""}
          placeholder='password' 
        />

        <BButton  loading={loading} onPress={loading ? () => {} : saveChanges} title='Save Chahges' />


      </View>
    </View>
  )
}

export default ChangeModalContent

const styles = StyleSheet.create({
  wrapper: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    height: "100%" ,
  },

  container: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: "white",
    width: 300

  },

  imageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },

  button: {
    borderRadius: 10,
    marginVertical: 10,
    
  },

  input: {
    width: 320,
    borderBottomColor: "transparent",

  },
  inputContainerStyle: {
    borderRadius: 45,
    paddingHorizontal: 12,
    padding: 6,
    backgroundColor: "#e5e7eb",
    borderColor: "transparent"
  },

})
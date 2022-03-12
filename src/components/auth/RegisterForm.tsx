import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useInputValue } from '../../hooks'; 
import LottieView  from 'lottie-react-native'
import { UserService } from '../../service';
import { lenghtValidator, requireValidator } from '../../helpers/validators'
import Toast from 'react-native-toast-message'
import { useRouting } from '../../hooks';
import { styles } from './loginStyles'
import { LoginButton } from '.'
import AuthPageNav from './AuthPageNav';
import { Feather } from '@expo/vector-icons'; 

const LoginForm = () => {

  const [name, bindName, ___,  isNameError, validateName] = useInputValue("", [requireValidator, lenghtValidator(3, 23)])
  const [email, bindEmail, __,  isEmailError, validateEmail] = useInputValue("", [requireValidator])
  const [password, bindPassword, _, isPasswordError, validatePassword] = useInputValue("", [requireValidator, lenghtValidator(8, 23)])
  const [loading, setLoading] = useState<boolean>(false)

  const  { navigateTo } = useRouting()

  const validateAll = () => {
    validateEmail();
    validatePassword();
    validateName()

    if (isEmailError || isPasswordError || isNameError) {
      return false
    } else {
      return true
    }
  }

  const register = async () => {
    setLoading(true)
    const valid = validateAll()

    if (!valid) {
      setLoading(false)
      return 
    }
    try {
      const user = UserService.createUser(name, email)      

      await UserService.register(user, password)

      navigateTo("home", { greet: { title: "Singed up succesfully" } })()
    } catch (e: any) {
      console.log(e)
      Toast.show({
        type: "error",
        text1: "Invalid input",
        text2: e.message
      })
      setLoading(false)
    }
    
  }

  return (
    <View style={{width: 320}}>

      <LottieView 
        style={styles.iconStyle} 
        loop autoPlay 
        speed={0.7} 
        source={require("../../assets/animations/71091-steps-screen-step-2.json")} 
      />

      <Input 
        style={{...styles.input}} 
        inputContainerStyle={{...styles.inputContainerStyle, marginTop: 30}} 
        {...bindName} 
        placeholder='name' 
        errorMessage={ isEmailError ? "name is required and must ne more than 3 symbols" : ""}
        rightIcon={<Feather name="user" size={24} color="black" />}  
      />

      <Input 
        style={styles.input} 
        inputContainerStyle={styles.inputContainerStyle} 
        {...bindEmail} 
        placeholder='email' 
        errorMessage={ isEmailError ? "email is required" : ""}
        rightIcon={<Ionicons name="mail" size={24}/>}  
      />
      <Input 
        style={styles.input} 
        inputContainerStyle={styles.inputContainerStyle}  
        {...bindPassword} 
        errorMessage={ isPasswordError ? "password is required must be more than 8 symbols" : ""}
        placeholder='password' 
        rightIcon={<MaterialIcons name="lock" size={24} color="black" />}  
      />

      <LoginButton loading={loading} onPress={register} text="Sign up" />

      <AuthPageNav noOr link='login' linkText='Sign in' text='have a account?,' />

    </View>
  )
}

export default LoginForm


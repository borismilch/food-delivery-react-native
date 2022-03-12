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
import { LoginButton, GoogleLogin } from '.'
import AuthPageNav from './AuthPageNav';

const LoginForm = () => {

  const [email, bindEmail, __,  isEmailError, validateEmail] = useInputValue("", [requireValidator])
  const [password, bindPassword, _, isPasswordError, validatePassword] = useInputValue("", [requireValidator, lenghtValidator(8, 23)])
  const [loading, setLoading] = useState<boolean>(false)

  const  { navigateTo } = useRouting()

  const validateAll = () => {
    validateEmail();
    validatePassword()

    if (isEmailError || isPasswordError) {
      return false
    } else {
      return true
    }
  }

  const login = async () => {
    setLoading(true)
    const valid = validateAll()

    if (!valid) {
      setLoading(false)
      return 
    }
    try {
      await UserService.login(email, password)

      navigateTo("home", { greet: { title: "Sing in succesfully" } })()
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "Invalid input",
        text2: e.message
      })
      setLoading(false)
    }
    
  }

  return (
    <View style={styles.wrapper}>

      <LottieView 
        style={styles.iconStyle} 
        loop autoPlay 
        
        speed={0.7} 
        source={require("../../assets/animations/98455-delivery-truck.json")} 
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

      <LoginButton loading={loading} onPress={login} text="Login" />

      <AuthPageNav link='register' linkText='Sign Up' text='do not have a account?,' />

      <GoogleLogin />

    </View>
  )
}

export default LoginForm


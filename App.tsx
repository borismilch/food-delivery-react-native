import { HomeScreen, RestaurantDetailScreen, OrderCompletedScreen, LoginScreen, RegisterScreen, AccountScreen, OrdersScreen } from './src/screens';
import {  NavigationContainer  } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Toast from 'react-native-toast-message'
import { toastConfig } from './src/components/toasts'
import { GoBack } from './src/components/reusable';

const Stack = createStackNavigator()

const HomeScreenOptions: StackNavigationOptions = {
  header: () => <></>,
}

export default function App() {

  return (
    <>
      <Provider store={store}>
        <NavigationContainer >
        <Stack.Navigator initialRouteName='home'>
        
          <Stack.Screen options={HomeScreenOptions} name="home" component={HomeScreen} />
          <Stack.Screen options={HomeScreenOptions} name="detail" component={RestaurantDetailScreen} />
          <Stack.Screen options={HomeScreenOptions} name="completed" component={OrderCompletedScreen} />

          <Stack.Screen options={HomeScreenOptions} name="orders" component={OrdersScreen} />

          <Stack.Screen options={HomeScreenOptions} name="login" component={LoginScreen} />
          <Stack.Screen options={HomeScreenOptions} name="register" component={RegisterScreen} />
          <Stack.Screen options={HomeScreenOptions} name="account" component={AccountScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      </Provider>

      <Toast config={toastConfig} />
    </>
    
  )
}

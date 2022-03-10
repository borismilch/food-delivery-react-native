import { HomeScreen, RestaurantDetailScreen, OrderCompletedScreen } from './src/screens';
import {  NavigationContainer  } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { createStackNavigator, StackNavigationOptions,  } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeScreenOptions: StackNavigationOptions = {
  header: () => <></>
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer >
       <Stack.Navigator initialRouteName='home'>
       
        <Stack.Screen options={HomeScreenOptions} name="home" component={HomeScreen} />
        <Stack.Screen options={HomeScreenOptions} name="detail" component={RestaurantDetailScreen} />
        <Stack.Screen options={HomeScreenOptions} name="completed" component={OrderCompletedScreen} />

       </Stack.Navigator>
     </NavigationContainer>
    </Provider>
    
  )
}

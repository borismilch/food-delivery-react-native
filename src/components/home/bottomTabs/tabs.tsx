import { ITab } from "../../../models";
import { Ionicons } from '@expo/vector-icons'
import FontAwesome  from 'react-native-vector-icons/FontAwesome5'

export const tabs: ITab[] = [
  {
   
    ActiveIcon: <FontAwesome size={25} name="home" />,
    text: "Home",
    to: "home"
  },
  {
   
    ActiveIcon: <FontAwesome size={25} name="search" />,
    text: "Search",
    to: "search"
  },
  {
  
    ActiveIcon: <FontAwesome size={25} name="shopping-bag" />,
    text: "Grocery",
    to: "grocery"
  }, 
  {
   
    ActiveIcon: <FontAwesome size={25} name="receipt" />,
    text: "Orders",
    to: "orders"
  },  
  {
    ActiveIcon: <FontAwesome size={25} name="user" />,
    text: "Account",
    to: "account"
  },
]
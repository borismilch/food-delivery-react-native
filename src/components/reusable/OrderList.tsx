import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IOrder } from '../../models'
import { Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { NoOrders, OrderItem } from '../orders'
import { OrderLoader } from '../restaurantDetail/viewCart'

interface OrdersListProps {
  loading: boolean,
  orders: IOrder[],
  title: string
}

const OrderList: React.FC<OrdersListProps> = (props) => {
  const { loading, orders, title } = props

  const hasOrders = orders?.length && orders.length > 0

  return (
     <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>

      <Divider width={0.5} />

      {
        !loading ? 
        <ScrollView style={{flex: 1}}>
        {
         orders?.map(item => (
            <OrderItem key={item.id} order={item as any} />
          ))
        }
       </ScrollView> : (
         <OrderLoader backgroundColor='transparent' />
       )
      }

      {!hasOrders && !loading && <NoOrders />}

    </View>
  )
}

export default OrderList

const styles = StyleSheet.create({
  wrapper: {
    height: 500,

    backgroundColor: "white",
    padding: 20,
    borderTopStartRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#202020",
    paddingBottom: 20
  }
})
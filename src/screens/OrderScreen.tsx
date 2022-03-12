import { StyleSheet, View } from 'react-native'
import React from 'react'
import { LastOrder, OrderList, BlackButton } from '../components'
import { firestore } from '../lib/firebase'
import { collection, query, orderBy } from 'firebase/firestore'
import { useCollection } from '../hooks'
import { IOrder } from '../models'
import { GoBack } from '../components/reusable'


const OrderScreen = () => {

  const ordersRef = query(collection(firestore, 'orders'), orderBy("createdAt"))
  const [orders, loading] = useCollection<IOrder>(ordersRef)

  const totalSpend = orders?.reduce((acc, item) => acc += item.totalPrice, 0)
  const lastOrder = orders && orders.length ? orders[orders?.length - 1] : undefined

  return (
    <View style={styles.wrapper}>
       <GoBack />
    <LastOrder order={lastOrder} />

      <OrderList 
        title='Orders Around the world' 
        loading={loading} 
        orders={orders? orders : []} 
      />

      <BlackButton text1='Money pend for all' text2={"$" + totalSpend} />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
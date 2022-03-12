import React from 'react'
import { useCollection, useAuthState } from '../../hooks'
import { collection, query } from 'firebase/firestore'
import { firestore } from '../../lib/firebase'
import { IOrder } from '../../models'
import { OrderList } from '../reusable'

const AccountOrders = () => {
  const { user } = useAuthState()
  const ordersRef = query(collection(firestore, 'orders'))
  const [orders, loading] = useCollection<IOrder>(ordersRef)
  const filteredOrders = orders?.filter(item => item.receiver === user?.uid + "")
  

  return (
    <OrderList loading={loading} orders={filteredOrders? filteredOrders : []} title="Your orders" />
  )
}

export default AccountOrders


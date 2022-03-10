import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

import { RouteProp, useRoute } from '@react-navigation/native'
import { useRouting } from '../../../hooks'
import { IRestaurant } from '../../../models'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAppSelector } from '../../../hooks/redux'
import { cartItemsSelector, totalPrice } from '../../../store/selectors'
import { OrderModalContent } from './'

import { ModalContainer } from '../../'

const ViewCard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const closeModal = () => setModalOpen(false)
  const openModal = () => setModalOpen(true)

  const { params } = useRoute<RouteProp<{restaurant: IRestaurant}>>()
  const { navigateTo } = useRouting()

  const cartItems = useAppSelector(cartItemsSelector)
  const total = useAppSelector(totalPrice)
  const hasItems = +total > 0

  return (
    <>
      <ModalContainer 
        open={modalOpen}
        onClose={closeModal}
      >
        <OrderModalContent onPress={closeModal} />
      </ModalContainer>
      <View style={
        {
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 20,
          
          zIndex: 999,
          opacity: hasItems ? 1 : 0,
        }
      }>
        <View style={styles.container}>
          <TouchableOpacity onPress={openModal} style={styles.wrapper}>
            <Text style={styles.text}>{!modalOpen ?  "View cart" : "Hide cart" }</Text>
            <Text style={styles.total}>{"$" + total}</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  )
}

export default ViewCard

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    position: 'relative',
    width: 300,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  container: {
    flexDirection: "row", 
    justifyContent: "center",
    width: "100%"
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
    
  },
  total: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
    marginLeft: 40,
    opacity: .7,
    width: 50
  }
})
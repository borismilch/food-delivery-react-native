import { StyleSheet } from 'react-native'
import React from 'react'
import { SpeedDial } from 'react-native-elements'

import Modal from "react-native-modal";
import { useRouting, useToggle, useUploadData } from '../../hooks';
import { auth } from '../../lib/firebase';
import { ChangeModalContent } from '.'


const ChangeAccount = () => {
 
  const [open, setOpen] = React.useState(false);
  const [isModalVisible, toggleIsModalVisible] = useToggle(false)
  const { navigateTo } = useRouting()

  const logout = async () => {
    await auth.signOut()
    navigateTo("login")()
  }

  return (
    <>
    <SpeedDial
      buttonStyle={{borderRadius: 100, overflow: 'hidden', backgroundColor: "#10b981"}}
      isOpen={open}
      icon={{ name: 'menu', color: '#fff' }}
      openIcon={{ name: 'close', color: '#fff' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      <SpeedDial.Action

        icon={{ name: 'edit', color: '#fff' }}
        buttonStyle={{borderRadius: 100, overflow: 'hidden', backgroundColor: "#10b981"}}
        title="Changr Profile"
        onPress={() => {toggleIsModalVisible(); setOpen(false)}}
      />
      <SpeedDial.Action
        icon={{ name: 'logout', color: '#fff' }}
        buttonStyle={{borderRadius: 100, overflow: 'hidden', backgroundColor: "#10b981"}}
        title="Logout"
        onPress={logout}
      />
    </SpeedDial>

      <Modal 
        onBackdropPress={toggleIsModalVisible} 
        isVisible={isModalVisible}
        hideModalContentWhileAnimating
        style={styles.modal}
        animationIn={"bounceIn"}
        swipeDirection={"down"}
        backdropOpacity={0.5}
      >
        <ChangeModalContent onClose={setOpen.bind(null, false)} />
      </Modal>

    </>
  )
}

export default ChangeAccount

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
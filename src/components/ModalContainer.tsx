import { Modal, Text } from 'react-native'
import React from 'react'

interface ModalConatinerProps {
  open: boolean,
  onClose: () => void
}

const ModalContainer: React.FC<ModalConatinerProps> = (props) => {
  const { onClose, open, children } = props

  return (
    <Modal 
      visible={open}
      transparent={true}
      onRequestClose={onClose}
      animationType='slide' 
    >
    
      {children}
     
    </Modal>
  
  )
}

export default ModalContainer

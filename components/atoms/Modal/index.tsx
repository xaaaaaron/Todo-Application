import React from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useColorScheme } from '../../useColorScheme'
import Colors from '../../../constants/Colors'
import { Theme } from '../../../app/typedefs/types'
import { StyledText } from '../StyledText'

interface CustomModalProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
}

const CustomModal = ({ visible, onClose, children }: CustomModalProps) => {
  const themes = useColorScheme()
  const styles = style(themes)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {children}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <StyledText style={styles.closeButtonText}>Close</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const style = (themes: Theme) => {
  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[themes].background,
    },
    modalContent: {
      backgroundColor: Colors[themes].background,
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    closeButton: {
      marginTop: 10,
      alignSelf: 'flex-end',
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 6,
      width: '100%',
      alignItems: 'center',
    },
    closeButtonText: {
      color: 'white',
    },
  })
}

export default CustomModal

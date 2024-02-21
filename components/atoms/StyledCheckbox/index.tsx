import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyledText } from '../StyledText'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useColorScheme } from '../../useColorScheme'
import Colors from '../../../constants/Colors'

interface ICheckBox {
  checked?: boolean
  onChange?: () => void
}

const Checkbox = ({ checked, onChange }: ICheckBox) => {
  const themes = useColorScheme()
  return (
    <TouchableOpacity
      onPress={onChange}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Ionicons
        name={checked ? 'checkmark-sharp' : 'square'}
        size={32}
        color={checked ? Colors[themes].primary100 : 'transparent'}
        style={{
          borderColor: Colors[themes].tint,
          borderWidth: 0.5,
          borderRadius: 5,
        }}
      />
    </TouchableOpacity>
  )
}

export default Checkbox

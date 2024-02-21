import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Checkbox from '../../atoms/StyledCheckbox'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput, TextInputProps } from '../../Themed'

import { useColorScheme } from '../../useColorScheme'
import Colors from '../../../constants/Colors'

interface ITodosCard {
  isChecked?: boolean
  label: string
  toggle?: () => void
  title: string
  onChange?: (text: string) => void
  onPressRemove?: () => void
  props: TextInputProps
  value: string
  isPriority?: boolean
}

const Card = ({
  isChecked,
  label,
  toggle,
  title,
  onChange,
  onPressRemove,
  value,
  isPriority,
}: ITodosCard) => {
  const themes = useColorScheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 6,
        gap: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Checkbox checked={isChecked} onChange={toggle} />

      <TextInput
        value={value}
        onChangeText={(text) => onChange && onChange(text)}
        style={{
          borderWidth: 0,
          textDecorationLine: isChecked ? 'line-through' : 'none',
        }}
      />

      {isPriority && (
        <View
          style={{
            backgroundColor: Colors[themes].primary200,
            padding: 4,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white' }}>Priority!</Text>
        </View>
      )}

      <Ionicons
        onPress={onPressRemove}
        name={'trash'}
        size={32}
        color={'red'}
      />
    </View>
  )
}

export default Card

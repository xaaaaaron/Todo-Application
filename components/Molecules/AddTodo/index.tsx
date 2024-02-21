import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput } from '../../Themed'
import Button from '../../atoms/Button'
import {
  addTodo,
  toggleTodo,
  updateTodoText,
  remove,
} from '../../../store/slice/todoSlice'
import Checkbox from '../../atoms/StyledCheckbox'
import { useColorScheme } from '../../useColorScheme'
import Colors from '../../../constants/Colors'
import { StyledText } from '../../atoms/StyledText'

interface IAddTodo {
  text: string
  onSubmit?: () => void
  isChecked?: boolean
  onChange?: () => void
  onChangeText?: (text: string) => void
}
const AddTodo = ({
  text,
  onSubmit,
  isChecked,
  onChange,
  onChangeText,
}: IAddTodo) => {
  const themes = useColorScheme()

  return (
    <View>
      <StyledText style={{ fontSize: 32, marginBottom: 20 }}>
        Add new task
      </StyledText>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Checkbox onChange={onChange} checked={isChecked} />
        <Text style={{ color: Colors[themes].text }}>Priority</Text>
      </View>
      <TextInput
        onChangeText={(text) => onChangeText && onChangeText(text)}
        value={text}
        style={{ width: '100%' }}
      />

      <Button
        disabled={text?.length === 0}
        onPress={() => onSubmit && onSubmit()}
        text={`Add`}
        textStyle={{ color: 'white', fontSize: 12 }}
        containerStyle={{ width: '100%', padding: 10, marginTop: 20 }}
      />
    </View>
  )
}

export default AddTodo

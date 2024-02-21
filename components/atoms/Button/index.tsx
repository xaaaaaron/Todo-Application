import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native'
import { Theme } from '../../../app/typedefs/types'
import { useColorScheme } from '../../useColorScheme'
import Colors from '../../../constants/Colors'

interface IButtonProps {
  text: string
  onPress: () => void
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  disabled?: boolean
}

const Button = ({
  text,
  onPress,
  containerStyle,
  textStyle,
  disabled,
}: IButtonProps) => {
  const themes = useColorScheme()
  const styles = style(themes as Theme)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyle,
        containerStyle,
        disabled && { backgroundColor: 'grey' },
      ]}
      disabled={disabled}
    >
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const style = (themes: Theme) => {
  return StyleSheet.create({
    buttonStyle: {
      backgroundColor: Colors[themes].primary100,
      width: 350,
      padding: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    textStyle: { color: '#fff', fontWeight: '600', fontSize: 20 },
  })
}

export default Button

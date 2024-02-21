import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../../constants/Colors'
import { useColorScheme } from '../../useColorScheme'
import Ionicons from '@expo/vector-icons/Ionicons'

const CustomHeader = ({ onPress }: { onPress: () => void }) => {
  const themes = useColorScheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 20,
      }}
    >
      <Text
        style={{ fontWeight: 'bold', fontSize: 32, color: Colors[themes].text }}
      >
        Tasks
      </Text>
      <Ionicons
        onPress={onPress}
        name="add"
        size={32}
        color={Colors[themes].primary100}
      />
    </View>
  )
}

export default CustomHeader

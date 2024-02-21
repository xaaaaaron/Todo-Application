import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import { ROUTES } from '../helpers'

import Colors from '../../constants/Colors'
import { Theme } from '../typedefs/types'
import { Text, View, TextInput } from '../../components/Themed'
import Button from '../../components/atoms/Button'
import { StyledText } from '../../components/atoms/StyledText'
import { useColorScheme } from '../../components/useColorScheme'

const SigninScreen = () => {
  const navigation = useNavigation()
  const theme = useColorScheme()
  const styles = style(theme as Theme)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StyledText style={{ marginBottom: 40 }}>Todo Application</StyledText>
        <View style={styles.form}>
          <TextInput
            value={username}
            placeholder={'Enter Username'}
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            value={password}
            secureTextEntry
            placeholder={'Enter Password'}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            text={`Sign in`}
            containerStyle={{ width: 300 }}
            onPress={() => navigation.navigate(ROUTES.HomePage)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = (themes: Theme) => {
  return StyleSheet.create({
    input: { width: 300, height: 40 },

    form: { flexDirection: 'column', gap: 20, alignItems: 'center' },
    container: {
      backgroundColor: Colors[themes].background,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    text: { color: 'red' },
  })
}

export default SigninScreen

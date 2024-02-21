import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { Text, StyleSheet, FlatList, View } from 'react-native'
import {
  addTodo,
  toggleTodo,
  updateTodoText,
  remove,
} from '../../store/slice/todoSlice'
import Card from '../../components/Molecules/Card'
import { Todo, Theme } from '../typedefs/types'
import CustomHeader from '../../components/Molecules/Header'
import { useColorScheme } from '../../components/useColorScheme'
import CustomModal from '../../components/atoms/Modal'
import AddTodo from '../../components/Molecules/AddTodo'
import { StyledText } from '../../components/atoms/StyledText'
import Colors from '../../constants/Colors'

const HomePage = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todoSlice)
  const styles = style()
  const themes = useColorScheme()
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState('')
  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id))
  }
  const handleOnChange = (id: number, text: string) => {
    dispatch(updateTodoText({ id: id, newText: text }))
  }

  const handleRemove = (id: number) => {
    dispatch(remove(id))
  }

  const handleAdd = () => {
    setIsVisible(true)
  }

  const renderItem = (item: Todo) => {
    return (
      <Card
        isPriority={item.isPriority}
        value={item.text}
        isChecked={item.completed}
        toggle={() => handleToggle(item.id)}
        onChange={(text) => handleOnChange(item.id, text)}
        onPressRemove={() => handleRemove(item.id)}
      />
    )
  }

  const handleSubmit = () => {
    dispatch(addTodo({ text: text, isPriority: isPriority }))
    setIsVisible(false)
    setText('')
    setIsPriority(false)
  }
  const countCompleted = todos.reduce((acc, item) => {
    if (item.completed) {
      return acc + 1
    }
    return acc
  }, 0)

  const countPending = todos.reduce((acc, item) => {
    if (!item.completed) {
      return acc + 1
    }
    return acc
  }, 0)

  const [isPriority, setIsPriority] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader onPress={handleAdd} />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <StyledText style={{ fontSize: 12 }}>Total tasks</StyledText>
        <View
          style={{
            backgroundColor: Colors[themes].primary100,
            padding: 5,
            borderRadius: 3,
          }}
        >
          <StyledText style={{ fontSize: 12, color: 'white' }}>
            {todos?.length}
          </StyledText>
        </View>
      </View>

      <StyledText style={{ fontSize: 12 }}>
        total done: {countCompleted}
      </StyledText>
      <StyledText style={{ fontSize: 12 }}>
        total peding: {countPending}
      </StyledText>
      <CustomModal visible={isVisible} onClose={() => setIsVisible(false)}>
        <AddTodo
          onSubmit={handleSubmit}
          onChangeText={(text) => setText(text)}
          text={text}
          isChecked={isPriority}
          onChange={() => setIsPriority(!isPriority)}
        />
      </CustomModal>
      <View style={{ marginVertical: 20 }} />
      {todos?.length > 0 ? (
        <FlatList
          data={todos}
          keyExtractor={(item: Todo, index: number) => `${item.id}_${index}`}
          renderItem={({ item }) => renderItem(item)}
        />
      ) : (
        <StyledText>Empty Todo</StyledText>
      )}
    </SafeAreaView>
  )
}

const style = (theme?: Theme) => {
  return StyleSheet.create({
    container: { padding: 20 },
  })
}

export default HomePage

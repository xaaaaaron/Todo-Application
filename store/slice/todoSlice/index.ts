import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: number
  text: string
  completed: boolean
  isPriority?: boolean
}

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [
    { id: 1, text: 'hello', completed: true },
    { id: 2, text: 'hello', completed: false, isPriority: true },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ text: string; isPriority: boolean }>,
    ) => {
      console.log(action)
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        isPriority: action.payload.isPriority,
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    updateTodoText: (
      state,
      action: PayloadAction<{ id: number; newText: string }>,
    ) => {
      console.log('update', action)
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.newText
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const {
  addTodo,
  toggleTodo,
  updateTodoText,
  remove,
} = todosSlice.actions
export default todosSlice.reducer

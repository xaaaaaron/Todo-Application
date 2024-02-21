import { combineReducers } from '@reduxjs/toolkit'

import counterSlice from '../slice/counterslice'
import todoSlice from '../slice/todoSlice'

const rootReducer = combineReducers({
  counterSlice: counterSlice,
  todoSlice: todoSlice,
})

export default rootReducer

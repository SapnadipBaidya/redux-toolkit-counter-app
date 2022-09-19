
import counterReducer from "../features/counterSlice.js";
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
const reducer = combineReducers({
  // here we will be adding reducers
  counterReducer:counterReducer  //giving this name to access the state in app.js in useSelector
})
const store = configureStore({
  reducer,
})
export default store;
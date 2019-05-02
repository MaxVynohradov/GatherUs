import { combineReducers } from 'redux'
import signInReducer from './Screens/SignInScreen/reducer'

export const rootReducer = combineReducers({
  fbData: signInReducer,
})

import { combineReducers } from 'redux'
import fbLoginReducer from './Screens/FbLoginScreen/reducer'

export const rootReducer = combineReducers({
  fbData: fbLoginReducer,
})

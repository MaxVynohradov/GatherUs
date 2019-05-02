/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './combineReducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))

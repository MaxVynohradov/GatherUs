import { Map } from 'immutable'

import {
  FB_GET_PROFILE_DATA,
  FB_GET_PROFILE_DATA_SUCCESS,
} from '../../constants'

const initialState = Map({
  token: Map({
    expirationTime: 0,
    lastRefreshTime: 0,
    accessTokenSource: '',
    accessToken: '',
  }),
  userId: '',
  email: '',
  first_name: '',
  last_name: '',
  name: '',
  gender: '',
  profileImage: Map({
    height: 0,
    width: 0,
    url: 0,
  }),
  isFetching: false,
})

export default function signInReducer (state = initialState, action) {
  switch (action.type) {
    case FB_GET_PROFILE_DATA:
      return state.merge({ isFetching: true })
    case FB_GET_PROFILE_DATA_SUCCESS:
      return state.merge({ isFetching: false, ...action.payload })
    default:
      return state
  }
}

import {
  FB_GET_PROFILE_DATA,
  FB_GET_PROFILE_DATA_SUCCESS,
  FB_GET_PROFILE_IMG,
  FB_GET_PROFILE_IMG_SUCCESS,
} from '../../constants'

const initialState = {
  token: {
    expirationTime: 0,
    lastRefreshTime: 0,
    accessTokenSource: '',
    accessToken: '',
  },
  userId: '',
  email: '',
  first_name: '',
  last_name: '',
  name: '',
  gender: '',
  profileImage: {
    height: 0,
    width: 0,
    url: 0,
  },
  isFetching: false,
}

export default function signInReducer (state = initialState, action) {
  switch (action.type) {
    case FB_GET_PROFILE_DATA:
      return { ...state, isFetching: true }
    case FB_GET_PROFILE_DATA_SUCCESS:
      return { ...state, isFetching: false, ...action.payload }
    case FB_GET_PROFILE_IMG:
      return { ...state, isFetching: true }
    case FB_GET_PROFILE_IMG_SUCCESS:
      return { ...state, isFetching: false, ...action.payload }
    default:
      return state
  }
}

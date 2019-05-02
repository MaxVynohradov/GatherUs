import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS } from '../../constants'

const initialState = {
  tag: 'black',
  total: 0,
  totalHits: 0,
  isFetching: false,
  hits: [],
}

export default function signInReducer (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return { ...state, ...action.payload }
    case GET_PHOTO_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

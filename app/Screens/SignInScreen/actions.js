import { GET_PHOTO_REQUEST } from '../../constants'

export function setTag (tag) {
  return async dispatch => {
    console.log('taggg', tag)
    dispatch({
      type: GET_PHOTO_REQUEST,
      payload: {
        tag,
        isFetching: true,
      },
    })
  }
}

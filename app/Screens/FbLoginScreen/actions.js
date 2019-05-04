/* eslint-disable camelcase */
import { FB_GET_PROFILE_DATA_SUCCESS } from '../../constants'

export function setUser ({
  currentAccessToken: { expirationTime, lastRefreshTime, accessToken },
  userData: {
    id: userId, email, phoneNumber, first_name, last_name, name, gender,
    picture: { data: { url, width, height } },
  },
}) {
  return async dispatch => dispatch({
    type: FB_GET_PROFILE_DATA_SUCCESS,
    payload: {
      token: { expirationTime, lastRefreshTime, accessToken },
      userId,
      email,
      phoneNumber,
      first_name,
      last_name,
      name,
      gender,
      profileImage: { url, width, height },
    },
  })
}

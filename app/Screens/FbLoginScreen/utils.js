import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk'

import { Alert } from 'react-native'

const FB_PERMISSIONS = ['public_profile', 'email']
const FB_PROFILE_FIELDS = 'gender,email,name,friends,first_name,last_name,picture.type(large)'

export async function facebookLogin () {
  let result
  try {
    this.setState({ showLoadingModal: true })
    LoginManager.setLoginBehavior('NATIVE_ONLY')
    result = await LoginManager.logInWithReadPermissions(FB_PERMISSIONS)
  } catch (nativeError) {
    try {
      LoginManager.setLoginBehavior('WEB_ONLY')
      result = await LoginManager.logInWithReadPermissions(FB_PERMISSIONS)
    } catch (webError) {
      return Alert.alert('Request to FB has been interrupted')
    }
  }
  if (result.isCancelled) {
    return Alert.alert('Request to FB has been cancelled')
  }
  const currentAccessToken = await AccessToken.getCurrentAccessToken()
  try {
    const userData = await new Promise((resolve, reject) => fBGraphRequest(
      currentAccessToken.accessToken,
      FB_PROFILE_FIELDS,
      (error, userData) => userData ? resolve(userData) : reject(error),
    ))
    return { currentAccessToken, userData }
  } catch (error) {
    return Alert.alert('Request to FB has been interrupted')
  }
}

export async function fBGraphRequest (accessToken, fields, callback) {
  const infoRequest = new GraphRequest('/me', {
    httpMethod: 'GET',
    version: 'v3.3',
    accessToken,
    parameters: {
      fields: {
        string: fields,
      },
    },
  }, callback.bind(this))
  new GraphRequestManager().addRequest(infoRequest).start()
}

import { Alert } from 'react-native'
import RNExitApp from 'react-native-exit-app'

export const alertError = (text, message = '') => Alert.alert(
  text,
  message,
  [
    {
      text: 'OK',
      onPress: () => RNExitApp.exitApp(),
    },
  ],
  { cancelable: false },
)

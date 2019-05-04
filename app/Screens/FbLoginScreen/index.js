import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import { setUser } from './actions'

class FbLoginScreen extends React.Component {
  static navigationOptions = { header: null }

  render () {
    return (
      <View>
        <Button title="Sign in!" onPress={this._fbLoginAsync} />
        <LoginButton
          onLoginFinished={
            async (error, result) => {
              if (error) {
                console.log('login has error: ' + result.error)
              } else if (result.isCancelled) {
                console.log('login is cancelled.')
              } else {
                const currentAccessToken = await AccessToken.getCurrentAccessToken()
                const infoRequest = new GraphRequest(
                  '/me',
                  {
                    httpMethod: 'GET',
                    version: 'v3.3',
                    accessToken: currentAccessToken.accessToken,
                    parameters: {
                      'fields': {
                        'string': 'gender,email,name,friends,first_name,last_name,picture.type(large)',
                      },
                    },
                  }, (err, userData) => {
                    console.log('===', err, userData)
                    this.props.setUserAction({ currentAccessToken, userData })
                  },
                )
                new GraphRequestManager()
                  .addRequest(infoRequest)
                  .start()
              }
            }
          }
          onLogoutFinished={() => console.log('logout.')} />

      </View>
    )
  }

  _fbLoginAsync = async () => {
    // this.props.setTagAction(`green ${Math.random().toString()}`)
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  };
}

const mapStateToProps = store => {
  console.log(store)
  return {
    fbData: store.fbData,
  }
}

const mapDispatchToProps = dispatch => ({
  setUserAction: tag => dispatch(setUser(tag)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FbLoginScreen)

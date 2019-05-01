import React from 'react'
import { View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render () {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log('login has error: ' + result.error)
              } else if (result.isCancelled) {
                console.log('login is cancelled.')
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    const infoRequest = new GraphRequest(
                      '/me',
                      {
                        httpMethod: 'GET',
                        version: 'v2.5',
                        parameters: {
                          'fields': {
                            'string': 'email,name,friends,first_name,last_name',
                          },
                        },
                      }, (err, res) => {
                        console.log(err, res)
                      },
                    )
                    console.log(data.accessToken.toString())
                    const pictureRequest = new GraphRequest(
                      '/me/picture',
                      {
                        httpMethod: 'GET',
                        version: 'v2.5',
                        parameters: {
                          redirect: {
                            'string': 'false',
                          },
                          type: {
                            'string': 'normal',
                          },
                        },
                      }, (err, res) => {
                        console.log(err, res)
                      },
                    )
                    new GraphRequestManager()
                      .addRequest(infoRequest)
                      .addRequest(pictureRequest)
                      .start()
                  },
                )
              }
            }
          }
          onLogoutFinished={() => console.log('logout.')} />

      </View>
    )
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  };
}

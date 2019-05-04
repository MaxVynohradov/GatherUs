import React from 'react'
import { ImageBackground, Image, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import image from '../../Assets/Images/logo/icon.png'

const loadUserData = async (navigation) => {
  const userToken = await AsyncStorage.getItem('userToken')
  setTimeout(() => navigation.navigate(userToken ? 'App' : 'Auth'), 0)
}

export default class SplashScreen extends React.Component {
  constructor (props) {
    super(props)
    loadUserData(this.props.navigation)
  }

  render () {
    return (
      <View>
        <ImageBackground style={styles.imageBackground}>
          <Image source={image} style={styles.slogan} />
        </ImageBackground>
      </View>
    )
  }
}

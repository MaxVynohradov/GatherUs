import React from 'react'
import { View } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import { connect } from 'react-redux'
import { setUser } from './actions'
import { facebookLogin } from './utils'
import styles from './styles'

class FbLoginScreen extends React.Component {
  static navigationOptions = { header: null }

  render () {
    return (
      <View style={styles.mainView}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          style={styles.fbButton}
          type='facebook'
          onPress={this._fbLoginAsync}
        />
      </View>
    )
  }

  _fbLoginAsync = async () => {
    const fbData = await facebookLogin()
    await this.props.setUserAction(fbData)
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

import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import { setUser } from './actions'
import { facebookLogin } from './utils'

class FbLoginScreen extends React.Component {
  static navigationOptions = { header: null }

  render () {
    return (
      <View>
        <Button title="Sign in!" onPress={this._fbLoginAsync} />
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

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import SignInScreen from './Screens/SignInScreen'
import AuthLoadingScreen from './Screens/AuthLoadingScreen'
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
)
const AuthStack = createStackNavigator({ SignIn: SignInScreen })

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

export const AppContainer = createAppContainer(AppNavigator)

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import FbLoginScreen from './Screens/FbLoginScreen'
import SplashScreen from './Screens/SplashScreen'
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
const AuthStack = createStackNavigator(
  {
    FbLogin: FbLoginScreen,
  },
  {
    initialRouteName: 'FbLogin',
  },
)

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash',
  },
)

export const AppContainer = createAppContainer(AppNavigator)

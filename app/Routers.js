import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import SignInScreen from './Screens/SignInScreen'
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
const AuthStack = createStackNavigator({ SignIn: SignInScreen })

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

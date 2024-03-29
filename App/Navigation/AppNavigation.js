import { StackNavigator } from 'react-navigation'
import BuyStockScreen from '../Containers/BuyStockScreen'
import StockDetailScreen from '../Containers/StockDetailScreen'
import HomeScreen from '../Containers/HomeScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  BuyStockScreen: { screen: BuyStockScreen },
  StockDetailScreen: { screen: StockDetailScreen },
  HomeScreen: { screen: HomeScreen },
  RegisterScreen: { screen: RegisterScreen },
  LoginScreen: { screen: LoginScreen },
  //LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

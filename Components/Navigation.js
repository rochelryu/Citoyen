import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import ListMinistere from './Components/ListMinistere';
import SuivieScreen from './Components/SuivieScreen';


const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Suivie: {screen: SuivieScreen},
    Soumettre: {screen: ListMinistere},
  })
export default createAppContainer(AppNavigator);
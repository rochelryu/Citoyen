import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import ListMinistere from './Components/ListMinistere';
import SuivieScreen from './Components/SuivieScreen';
import Condition from './Condition';
import MinistereItem from './MinistereItem';


const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Suivie: {screen: SuivieScreen},
    Soumettre: {screen: ListMinistere},
  })
export default createAppContainer(AppNavigator);
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ListMinistere from './ListMinistere';
import SuivieScreen from './SuivieScreen';
import About from './About';
import AdminScreen from './AdminScreen';
import Condition from './Condition';
import Help from './Help';
import Quit from './Quit';
import Stat from './Stat';
import Numbers from './Numbers';
const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Suivie: {screen: SuivieScreen},
    Soumettre: {screen: ListMinistere},
    MinistereItem: {screen: MinistereItem},
    Condi: {screen: Condition},
    Demande: {screen: Demande},
    Statistique: {screen: Stat}

  })
export default createAppContainer(AppNavigator);
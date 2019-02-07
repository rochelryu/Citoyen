import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import ListMinistere from './Components/ListMinistere';
import SuivieScreen from './Components/SuivieScreen';
import About from './Components/About';
import AdminScreen from './Components/AdminScreen';
import Condition from './Components/Condition';
import Help from './Components/Help';
import Quit from './Components/Quit';
import Stat from './Components/Stat';
import Numbers from './Components/Numbers';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
    Suivie: {screen: SuivieScreen},
    Soumettre: {screen: ListMinistere},
    MinistereItem: {screen: MinistereItem},
    Condi: {screen: Condition},
    Demande: {screen: Demande},
    Statistique: {screen: Stat},
}, ()=>{
  createAppContainer(AppNavigator)
})
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/bg.png')} style={styles.backgroundImage}>
        <AppDrawlerNavigation style={{marginTop: 20}} />
      </ImageBackground>
    );
  }
}

const CustomDrawler = (props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{ height: 150, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
    <Image
    style={styles.image}
    source={require('./assets/pays.png')}
/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
  )
const AppDrawlerNavigation = createDrawerNavigator({
  Accueil:HomeScreen,
  Soumettre:ListMinistere,
  Suivre:SuivieScreen,
  'Numéro de Reclamations':Numbers,
  Administration:AdminScreen,
  Statistique:Stat,
  'Conditions Utlisations' :Condition,
  'A propos': About,
  'Besoin d\' aide': Help,
  Quitter:Quit

  /*Suivre:SuivreScreen,
  Administration:AdministrationScreen,*/
}, {
  contentComponent: CustomDrawler,
  contentOptions : {
    activeTintColor: '#00a25d'
  }
})

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1
  },
  image: {
  }
})
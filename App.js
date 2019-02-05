import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import SoumettreScreen from './Components/SoumettreScreen';
import SuivieScreen from './Components/SuivieScreen';

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
    <View style={{ height: 100, backgroundColor: 'orange'}}>
      <Text style={styles.padL}> Menu </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
  )

const AppDrawlerNavigation = createDrawerNavigator({
  Accueil:HomeScreen,
  Soumettre:SoumettreScreen,
  Suivre:SuivieScreen
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
  padL: {
    marginTop: 50,
    marginLeft: 20,
    color: "#fff"
  }
})
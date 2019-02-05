import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import ListMinistere from './Components/ListMinistere';
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
  },
  image: {
  }
})
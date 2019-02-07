//components/ListMinistere.js

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { Header, Left, Button, Right, Body, Icon } from 'native-base';
import {getRecom} from '../Helpers/MinistereData'

class About extends React.Component{

    constructor(){
        super()
        this.searchText = "";
      }

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="information" style={{fontSize: 20, color: tintColor}} />
        )
    }

    _load(){
        //
        if(this.searchText.length > 0){
            getRecom(this.searchText).then(donne => this.ele = donne);
        /* setTimeout(()=>{
          if(this.ele.length > 0){
            return (
              <View>
                <Dialog.Container>
                  <Dialog.Title>Resultat</Dialog.Title>
                  <Dialog.Description>
                  <View style={styles.container }>
                  <Text style={styles.title }>Demande Num {ele.numero} </Text>
                  <Text style={styles.subTitle }>Statut </Text>
                  <Text style={styles.wait }>{(ele.reponsenivavancement != null) ? ele.reponsenivavancement : 'Aucun Statut pour le moment' } </Text>
                  <Text style={styles.subTitle }>Message </Text>
                  <Text style={styles.simple }>{ele.message}</Text>
                  <Text style={styles.subTitle }>Département </Text>
                  <Text style={styles.simple }>{ele.libelle}</Text>
                  <Text style={styles.subTitle }>Commune </Text>
                  <Text style={styles.simple }>{ele.localisation}</Text>
              </View>
              </Dialog.Description>
                  <Dialog.Button label="Fermer" onPress={this.handleCancel} />
                </Dialog.Container>
              </View>
           )}
          else{
            Alert.alert(
              'Alert Title',
              'Ce code est relié à aucune demande',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')}
              ],
              {cancelable: false},
            );
           }
         }, 1000)
         */
        console.log("lele" + this.searchText) 
        }
    }

    _searchFilm(text){
    this.searchText = text;
    console.log("search" + this.searchText)
    }

    render(){
        return(
            <View style={{flex:1, marginTop: 21}}>
            <Header style={{backgroundColor:'orange'}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
                    </Button>
                    
                </Left>
                <Body>
                    <Text style={{color:"white", fontSize:13}}>A propos</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
                <View style={{}}>
               

                <Button onPress={()=> this._load() }><Text>Chercher</Text></Button>

            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default About;
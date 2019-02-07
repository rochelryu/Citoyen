//components/ListMinistere.js

import React from 'react';
import {Alert, StyleSheet, View,TextInput, TouchableHighlight, Image, FlatList} from 'react-native';
import {Content, Container, Header, Text, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button, Right } from 'native-base';
import ListLocalite from './ListLocalite'
import {localiteApi} from '../Helpers/minister';


class Condition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : "", email: "", number:"", date: "", local: []};
        this.searchText = "";
        this.affiche = "";
      }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="paper" style={{fontSize: 20, color: tintColor}} />
        )
    }

      _search(text){
        this.searchText = text;
        if(this.searchText.length > 0)
        localiteApi().then(donn => {
            this.setState({ local: donn });
            this.affiche = (
                <View>
                    <FlatList
                    data={this.state.local}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ListLocalite local={item} />}
                        />
                </View>)
                return this.affiche
        })
        else{
            this.affiche = (
                <View>
                <FlatList
              data={[{id:0, libele: "Aucun Resultat"}]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <ListLocalite local={item} />}
                />
                </View>
            )
            return this.affiche
        }
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
                    <Text style={{color:"white", fontSize:13}}>condidtion</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
            <View style={{padding: 20}}>
            <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
              <Icon name="map" style={{fontSize: 30}} />
                <Body>
                <TextInput style={{ borderBottomColor: "#555", borderBottomWidth: 1}} onChangeText={(text) => this._search(text)} placeholder="Commune/Localite" />
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              {this.affiche}
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default Condition;
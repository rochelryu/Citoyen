//components/ListMinistere.js

import React from 'react';
import {Alert, StyleSheet, Text, View,TextInput, TouchableHighlight, Image, FlatList} from 'react-native';
import {Header, Left, Body, Icon, Button, Right } from 'native-base';
import {localiteApi} from '../Helpers/minister';
import Select from 'react-native-select-plus';



class Condition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : "", email: "", number:"", date: "", local: [],value: null};
        localiteApi().then(donn => /*{
        this.setState({ local: donn }*/ console.log(donn));
        this.searchText = "";
        this.affiche = "";
      }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="paper" style={{fontSize: 20, color: tintColor}} />
        )
    }

    onSelectedItemsChange = (key, value) => {
        this.setState({ value: value });
      };
    render(){
        const { value } = this.state;
        return(
            <View style={{flex:1, marginTop: 21}}>
            <Header style={{backgroundColor:'orange'}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
                    </Button>
                    
                </Left>
                <Body>
                    <Text style={{color:"white", fontSize:13}}>Condidtion</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
            <View style={{ flex: 1 }}>
                <Select
                data={this.items}
                width={250}
                placeholder="Commune/localite ..."
                onSelect={this.onSelectedItemsChange.bind(this)}
                data={data}
                search={true}
                />
        <View>
        </View>
      </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default Condition;
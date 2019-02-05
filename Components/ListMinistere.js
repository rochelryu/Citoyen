//components/ListMinistere.js

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { Header, Left, Button, Right, Body, Icon } from 'native-base';

import ministeres from '../Helpers/MinistereData';
import MinistereItem from './MinistereItem';

class ListMinistere extends React.Component{

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="send" style={{fontSize: 20, color: tintColor}} />
        )
    }

    _displayDetailForMinistere = (idMinistere) => {
        console.log("Display ministerie with id " + idMinistere)
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
                    <Text style={{color:"white", fontSize:13}}>Suivre une demande</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
                <FlatList
                    data={ministeres}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MinistereItem ministere={item} displayDetailForMinistere={this._displayDetailForMinistere} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default ListMinistere;
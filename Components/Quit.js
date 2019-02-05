//components/ListMinistere.js

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { Header, Left, Button, Right, Body, Icon } from 'native-base';


class Quit extends React.Component{

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="back" style={{fontSize: 20, color: tintColor}} />
        )
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
                    <Text style={{color:"white", fontSize:13}}>Quitter</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default Quit;
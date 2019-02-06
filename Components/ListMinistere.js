//components/ListMinistere.js

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { Header, Left, Button, Right, Body, Icon } from 'native-base';

import ministeres from '../Helpers/MinistereData';
import MinistereItem from './MinistereItem';

class ListMinistere extends React.Component{

    constructor(props){
        super();
        getMinisteresFromApi().then(donn => {
            this._ministeres = donn
            this.forceUpdate()
        })
    }

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="send" style={{fontSize: 20, color: tintColor}} />
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
                    <Text style={{color:"white", fontSize:13}}>Suivre une demande</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
                <View style={styles.grand}>
                    <View style={styles.flatlist} >
                        <FlatList
                            data={this._ministeres}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <MinistereItem ministere={item} />}
                        />
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default ListMinistere;
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Button, Right, Body, Icon } from 'native-base';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class SoumettreScreen extends React.Component{
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="send" style={{fontSize: 20, color: tintColor}} />
        )
    }
    render(){
        return(
            <View style={styles.container }>
                <Text>SoumettreScreen</Text>
            </View>
        )
    }
}

export default SoumettreScreen;

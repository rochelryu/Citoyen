import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Dialog from "react-native-dialog";



class Demande extends React.Component{
    render () {
        const ele = this.props.client;
        if(ele.length > 0){
        return (
          <View>
            <Dialog.Container>
              <Dialog.Title>Account delete</Dialog.Title>
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
        return (
            <View>
              <Dialog.Container>
                <Dialog.Title>Account delete</Dialog.Title>
                <Dialog.Description>
                CE CODE N'AS AUCUNE DEMANDE
            </Dialog.Description>
                <Dialog.Button label="Fermer" onPress={this.handleCancel} />
              </Dialog.Container>
            </View>
         ) 
       }
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingLeft: 15
    },
    title : {
        color: '#f67f00',
        fontSize: 20,
        marginBottom: 10
    },
    subTitle: {
        color: '#f67f00',
        fontSize: 15,
        marginBottom: 5
    },
    wait: {
        fontSize: 14,
        marginBottom: 5
    },
    simple: {
        fontSize: 11,
        marginBottom: 4
    }
})
export default Demande;

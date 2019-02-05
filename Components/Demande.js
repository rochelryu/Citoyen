import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'




class Demande extends React.Component{
    render(){
        const result = this.props.etat;
        if(result){
        return(
            <View style={styles.container }>
                <Text style={styles.title }>Demande Num 1234567 </Text>
                <Text style={styles.subTitle }>Statut </Text>
                <Text style={styles.wait }>En cours de traitement vous serez notifié en moins de 5 jours. </Text>
                <Text style={styles.subTitle }>Message </Text>
                <Text style={styles.simple }>Lorem ipsum de dire ce que je ne pense pas sans aucune pensé. Bref ici sera affiché le message notifiant au client ce qu'il doit faire ou pas. Bon je ne sais pas vraiment grande chose moi même donc je m'exprime</Text>
                <Text style={styles.subTitle }>Département </Text>
                <Text style={styles.simple }>Ministère de l'emploie et de la protection Sociale</Text>
                <Text style={styles.subTitle }>Commune </Text>
                <Text style={styles.simple }>Aboisso</Text>

                <Button title="Fermer" onPress={()=> this.props.navigation.goBack()} />
            </View>
        )
    }
    else{
        return(
            <View style={styles.container }>
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

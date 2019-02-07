// Components/MinistereItem.js

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

class  MinistereItem extends React.Component{
    render(){
        const ministere = this.props.ministere;
        const {navigate} = this.props.navigation;
        return(
            <TouchableOpacity style={styles.main_container} onPress={() => navigate('Condi')}>
                <Image
                    style={styles.image}
                    source={require('../assets/mini.png')}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text} numberOfLines={2}>{ministere.libelle}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>
                        <Icon name="phone" style={{fontSize:10, color:'#555'}}/>  {ministere.contact}
                        </Text>
                        <Text style={styles.statut_text}> <Icon name="map" style={{fontSize:10, color:'#555'}} /> {ministere.localisation}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
        height: 100,
        borderWidth:1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        width: 110,
        height: 100
    },
    content_container: {
        flex: 1,
        margin: 2
    },
    description_container:{
        flex: 1
    },
    header_container: {
        flex: 1,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 14,
        flexWrap: 'wrap',
        paddingRight: 5,
        color:"#F5A11F"
    },
    description_text: {
        fontStyle: 'italic',
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    statut_text: {
        fontStyle: 'italic',
        color: '#444',
        fontSize: 12,
        fontWeight: 'bold',
    }
})

export default MinistereItem;
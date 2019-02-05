import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import { Header, Left, Button, Right, Icon } from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22
    },
    containers: {
        flex: 3,
        alignItems: 'center',
    },
    top: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 17,
        color: "#00a25d",
        marginBottom: 10
    },
    trans: {
        marginRight: 10,
        marginLeft: 27,
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row'
    },
    foott: {
        flex: 2,
        alignItems: 'center',
    },
    img: {
        alignItems: 'center',
        width: 150,
        height: 170,
        marginRight: 4
    },
    img1: {
        alignItems: 'center',
        width: 150,
        height: 170
    }
})

class HomeScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = { films: [], isLoading: false };
    }

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="home" style={{fontSize: 20, color: tintColor}} />
        )
    }

    render(){
        return (
        <View style={styles.container}>
            <Header style={{backgroundColor:'#00a25d'}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
                    </Button>
                </Left>
                <Right>
                    <Text style={{color:"white", fontSize:20}}>Accueil</Text>
                </Right>
            
            </Header>
            <View style={styles.containers}>
                <Text style={styles.top}>
                LE PORTAIL DU CITOYEN
                </Text>
                <Image style={styles.Icon} source={require('../assets/iconT.png')}/>
            </View>
            <View style={styles.trans}>
                <TouchableOpacity onPress={()=> console.log("test")}>
                    <Image style={styles.img} source={require('../assets/smc.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> console.log('je clique vraiment 2')}>
                    <Image style={styles.img1} source={require('../assets/statV.png')}/>
                </TouchableOpacity>

            </View>
            <View style={styles.trans}>
            <TouchableOpacity onPress={()=> console.log('je clique vraiment 2')}>
                <Image style={styles.img} source={require('../assets/x.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation('Suivie')}>
                <Image style={styles.img1} source={require('../assets/suivre.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.foott}>
            <Image style={{width: 70, height: 70}} source={require('../assets/footer.png')}/>
            <Text style={{fontSize: 10, paddingLeft: 35, paddingRight: 35, textAlign:'center', marginBottom: 10 }}>Ministère de la Modernisation de l'Administration et de l'Innovation du Service Publique</Text>
            </View>
        </View>
        )
    }
}

export default HomeScreen;

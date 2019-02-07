import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight, Modal, Alert} from 'react-native'
import { Header, Left, Button, Right, Icon } from 'native-base';



const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        marginTop: 22
    },
    containers: {
        display:'flex',
        flex: 2,
        alignItems: 'center',
    },
    containerss: {
        display:'flex',
        flex: 1,
        alignItems: 'center',
    },
    top: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        color: "#00a25d",
    },
    trans: {
        display:'flex',
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row'
    },
    foott: {
        display:'flex',
        flex: 2,
        alignItems: 'center',
    },
    img: {
        marginTop: 10,
        alignItems: 'center',
        width: 150,
        height: 174,
        marginRight: 4
    },
    img1: {
        marginTop: 10,
        alignItems: 'center',
        width: 150,
        height: 174
    },
    modal:{
        position: 'relative',
        textAlign: 'center',
        margin:10,
        borderRadius:5,
        display: 'flex',
        justifyContent:"center",
        alignItems: "center",
        padding:16
      },
      bouton: {
        color: 'white',
        textAlign:'center',
        borderColor:'#000000',
        margin:3,
        padding:10,
        backgroundColor:'#F77F00',
        width:250,
        shadowColor: '#000000',
        shadowOpacity: 15
      },
      closeModal:{
        
        marginTop:15,
        color: 'red',
        borderWidth: 1,
        padding:10
      },
})

class HomeScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state = { films: [], isLoading: false, modalVisible: false };
    }
    setModalVisible(visible){
        this.setState({modalVisible: visible});
      }

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="home" style={{fontSize: 20, color: tintColor}} />
        )
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
        <View style={styles.container}>
            {/* modal d'affichage */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                Alert.alert('Cliquez sur OK pour fermer');
            }}>
                <View style={{flex:1, display:'flex', justifyContent:'center', backgroundColor: 'rgba(255,255,255,0.3)'}}>
                    <View style = {styles.modal}>
                    <TouchableOpacity onPress={()=> navigate('Soumettre')}>
                        <Text style= {styles.bouton}> RECLAMATION </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigate('Soumettre')}>
                        <Text style= {styles.bouton}> SUGGESTION </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigate('Soumettre')}>
                        <Text style= {styles.bouton}> OBSERVATION </Text>
                    </TouchableOpacity>
                    <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={styles.closeModal}>FERMER</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>

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
            <View style={styles.containerss}>
                <View style={styles.containers}>

                <Text style={styles.top}>
                LE PORTAIL DU CITOYEN
                </Text>
                <Image style={styles.Icon} source={require('../assets/iconT.png')}/>
            </View>
                <View style={styles.trans}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                        <Image style={styles.img} source={require('../assets/smc.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> console.log('beta')}>
                        <Image style={styles.img1} source={require('../assets/statV.png')}/>
                    </TouchableOpacity>

                </View>
                <View style={styles.trans}>
                <TouchableOpacity onPress={()=> console.log('je clique vraiment 2')}>
                    <Image style={styles.img} source={require('../assets/x.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigate("Suivie")} >
                    <Image style={styles.img1} source={require('../assets/suivre.png')}/>
                </TouchableOpacity>
                </View>
                <View style={styles.foott}>
            <Image style={{width: 70, height: 70}} source={require('../assets/footer.png')}/>
            <Text style={{fontSize: 10, paddingLeft: 35, paddingRight: 35, textAlign:'center', marginBottom: 10 }}>Ministère de la Modernisation de l'Administration et de l'Innovation du Service Publique</Text>
            </View>
            </View>
        </View>
        )
    }
}

export default HomeScreen;

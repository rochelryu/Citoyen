import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native'

class ModalExemple extends Component{
  state = {
    modalVisible: false,
  };

  setModalVisible(visible){
    this.setState({modalVisible: visible});
  }


  render(){
    return (
      <View style={{marginTop: 22}}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
        }}>
          <View style={{marginTop: 22}}>
            <View style = {styles.modal}>
              <Text style= {styles.bouton}> RECLAMATION </Text>
              <Text style= {styles.bouton}> OBSERVATION </Text>
              <Text style= {styles.bouton}> SUGGESTION </Text>
              <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={styles.closeModal}>FERMER</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true);
        }}>
        <Text>Bouton</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor: "white",
    textAlign: 'center',
    margin:30,
    borderRadius:5,
    display: 'flex',
    flex: 1,
    flexDirection:'column',
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
    position:"absolute",
    right: -115,
    marginTop:15,
    color: 'red'
  },
})

export default ModalExemple;
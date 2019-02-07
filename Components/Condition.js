//components/ListMinistere.js

import React from 'react';
import { Modal, TouchableWithoutFeedback, Text, StyleSheet, Platform, View, Picker, TextInput, TouchableOpacity } from 'react-native';
import {Header, Left, Body, Icon, Button, Right } from 'native-base';
import {localiteApi} from '../Helpers/minister';


class Condition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : "", email: "", number:"", date: "",modalVisible: false};
        localiteApi().then(donn => {
        this.local = donn } );
        this.forceUpdate()
      }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="paper" style={{fontSize: 20, color: tintColor}} />
        )
    }

    onSelectedItemsChange = (key, value) => {
        this.setState({ value: value });
      };
      render() {
        if (Platform.OS === 'android') {
          return (
            <Picker
              selectedValue={this.props.localisation}
              onValueChange={this.props.onValueChange}>
              {this.props.items.map((i, index) => (
                <Picker.Item key={index} label={i.id} value={i.value} />
              ))}
            </Picker>
          );
        } else {
          const selectedItem = this.props.items.find(
            i => i.localisation === this.props.localisation
          );
          const selectedid = selectedItem ? selectedItem.id : '';
          return (
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: true })}>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholder="Select language"
                  onChangeText={searchString => {
                    this.setState({ searchString });
                  }}
                  value={selectedid}
                />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}>
                <TouchableWithoutFeedback
                  onPress={() => this.setState({ modalVisible: false })}>
                  <View style={styles.modalContainer}>
                    <View style={styles.buttonContainer}>
                      <Text
                        style={{ color: 'blue' }}
                        onPress={() => this.setState({ modalVisible: false })}>
                        Done
                      </Text>
                    </View>
                    <View>
                      <Picker
                        selectedValue={this.props.value}
                        onValueChange={this.props.onValueChange}>
                        {this.props.items.map((i, index) => (
                          <Picker.Item
                            key={index}
                            label={i.id}
                            value={i.localisation}
                          />
                        ))}
                      </Picker>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          );
        }
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 5,
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    inputContainer: {
      ...Platform.select({
        ios: {
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        },
      }),
    },
    input: {
      height: 40,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      padding: 4,
      backgroundColor: '#ececec',
    },
  });


export default Condition;
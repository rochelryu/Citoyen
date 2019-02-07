import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View, ScrollView } from 'react-native';
import { Header, Left, Right, Body, Icon, Form, Item,Label,Input } from 'native-base';
import { CheckBox, Button } from 'react-native-elements'
import {localiteApi} from '../Helpers/MinistereData'
import RNPickerSelect from 'react-native-picker-select';
// import RNPickerSelect from './debug'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.items3 = new Array();
        this.inputRefs = {};
        localiteApi().then(donn => {this.local = donn;
            for(let i in this.local){
                this.items3.push({label: this.local[i].value, value: this.local[i].value})
                continue;
            }
            this.forceUpdate();
        })
        this.state = {
            checked: false,
            name: "",
            email: "",
            tel: "",
            message: "",
            theme: "",
            prenom: "",
            favColor: undefined,
            items: [],
            favSport: undefined,
            items2:  [
                {
                    label: 'Réclamation',
                    value: 'Réclamation',
                },
                {
                    label: 'Observation',
                    value: 'Observation',
                },
                {
                    label: 'Suggestion',
                    value: 'Suggestion',
                },
            ],
        };
    }
    _isloading(){
        if(this.state.email > 0 && this.state.favSport != undefined && this.state.tel > 0 && this.state.name > 0 && this.state.prenom > 0 && this.state.message > 0 && this.state.theme > 0 && this.state.favColor != undefined && this.state.checked ){
            console.log('Prèt pour le post')
        }
    }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="paper" style={{fontSize: 20, color: tintColor}} />
        )
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it

        // parent can also update the `items` prop
        setTimeout(() => {
            this.setState({
                items: this.items3,
            });
        }, 2500);
    }

    render() {
        return (
            <View style={styles.container}>
            <Header style={{backgroundColor:'orange'}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
                    </Button>
                    
                </Left>
                <Body>
                    <Text style={{color:"white", fontSize:13}}>A propos</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
            <ScrollView style={styles.containers}>
                <View style={{ paddingVertical: 5 }} />

                <Text>Commune/Localité</Text>
                <RNPickerSelect
                    placeholder={{
                        label: '...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favColor}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text>Nature *</Text>
                <RNPickerSelect
                    placeholder={{
                        label: '...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSport}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                <View style={{ paddingVertical: 5 }} />

                <Form>
            <Item floatingLabel>
              <Label>Thème *</Label>
              <Input onChangeText={(text) => {this.state.theme = text}}/>
            </Item>
            <Item floatingLabel>
              <Label>Message *</Label>
              <Input onChangeText={(text) => {this.state.message = text}}/>
            </Item>
            <Item floatingLabel>
              <Label>Nom *</Label>
              <Input onChangeText={(text) => {this.state.name = text}}/>
            </Item>
            <Item floatingLabel>
              <Label>Prénom *</Label>
              <Input onChangeText={(text) => {this.state.prenom = text}} />
            </Item>
            <Item floatingLabel>
              <Label>Téléphone *</Label>
              <Input onChangeText={(text) => {this.state.tel = text}}/>
            </Item>
            <Item floatingLabel>
              <Label>Email *</Label>
              <Input onChangeText={(text) => {this.state.email = text}} />
            </Item>
            <View style={{ flexDirection:'row' }}>
            <CheckBox
                center
                title='Click Here'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                />
            </View>

            <View style={{ marginTop: 100, padding: 20}}>
            
            <Button onPress={() => this._isloading()} raised icon={{name: 'save'}} title='Envoyé' />
            
            </View>
          </Form>
            </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        marginTop: 22,
    },
    containers: {
        paddingVertical: 20
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
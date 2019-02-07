//components/ListMinistere.js

import React from 'react';
import {StyleSheet, View, Text, FlatList, TextInput} from 'react-native';
import { Header, Left, Button, Right, Body, Icon } from 'native-base';
import { Dialog } from 'react-native-simple-dialogs';
import DocForm from "react-cross-form";
import { getRecom } from '../Helpers/MinistereData'
import {Demande} from './Demande'

const FORM_FIELDS = [
    {
      key: "code",
      label: "Code de Validation",
      placeholder: "12345678",
      component: TextInput,
      validators: { tel: true, length: { minimum: 3 },  }
    }
  ];

class SuivieScreen extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			form: {
				code: null
			},
			isValid: false
		};
		this.onChange = this.onChange.bind(this)
	}
	onChange({updateData}){
		this.setState({ form: updateData })
    }
    
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="eye" style={{fontSize: 20, color: tintColor}} />
        )
    }

    _displayDetailForMinistere = (idMinistere) => {
        console.log("Display ministerie with id " + idMinistere)
    }

    render(){
            const { form, isFormValid } = this.state;
            return (
              <div>
                <h2>Code De Validation</h2>
                <form>
                <DocForm
                  fields={FORM_FIELDS}
                  data={this.state.form}
                  onChange={this.onChange}
                  validateType="all"
                  onValidateStateChanged={({ isValid }) => {
                    this.setState({ isFormValid: isValid });
                  }}
                />
                </form>
              </div>
            );
    }
}

const styles = StyleSheet.create({

})


export default SuivieScreen;
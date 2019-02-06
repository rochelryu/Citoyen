import React from 'react'
import {View,Text, StyleSheet} from 'react-native';
import { Header, Left, Button, Right, Body, Icon } from 'native-base';
import Timeline from 'react-native-timeline-listview'

/*const MainNavigator = 
  const AppT = createAppNavigator(MainNavigator);*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 21
    }
})

class SuivieScreen extends React.Component{
    constructor(){
        super()
        this.data = [
          {time: '1', title: 'Code de votre demande'},
          {time: '2', description: 'Event 1 Description'}
        ]
      }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
              <Icon name="eye" style={{fontSize: 20, color: tintColor}} />
        )
    }
    render(){
        return(
            <View style={styles.container }>
            <Header style={{backgroundColor:'orange'}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
                    </Button>
                    
                </Left>
                <Body>
                    <Text style={{color:"white", fontSize:13}}>Suivre une demande</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='close' onPress={()=> this.props.navigation.goBack()}/>
                    </Button>
                </Right>
            </Header>
            <Timeline
            data={this.data}
            circleSize={20}
          circleColor='rgb(255,127,39)'
          lineColor='rgb(68,68,68)'
          timeContainerStyle={{minWidth:52}}
          timeStyle={{textAlign: 'center', backgroundColor:'#555555', color:'white', borderRadius:50}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          />
            </View>
        )
    }
}

export default SuivieScreen;

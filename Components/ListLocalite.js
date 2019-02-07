import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListLocalite extends Component {
  render() {
    const local = this.props.local;
    return (
      <Container>
        <Header />
        <Content>
          <Separator bordered>
            <Text>Resultat</Text>
          </Separator>
          <ListItem>
            <Text>{local.libelle}</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, List, ListItem, Header, Title, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header><Title></Title></Header>
        <Content>
          <List>
            <ListItem button onPress={Actions.stats}>
                <Text>Roll for stats</Text>
            </ListItem>
            <ListItem button onPress={Actions.race}>
                <Text>Choose Race</Text>
            </ListItem>
            <ListItem button onPress={Actions.class}>
                <Text>Choose Class</Text>
            </ListItem>
            <ListItem button onPress={Actions.background}>
                <Text>Choose Background</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

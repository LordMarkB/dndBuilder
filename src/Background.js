import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, List, ListItem, Header, Title, Content, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Background extends Component {
   render(){
    return (
      <Container>
        <Header><Title>Choose Background</Title></Header>
        <Content>
          <List>
            <ListItem button onPress = {Actions.home}>
              <Thumbnail square size={80} />
              <Text>Sailor</Text>
              <Text note> Sailors have a love of the sea</Text>
            </ListItem>
            <ListItem button onPress = {Actions.home}>
              <Thumbnail  square size={80} />
              <Text>Solider</Text>
              <Text note>Elves love nature and magic, art and artistry, music and poetry, and the good things of the world</Text>
            </ListItem>
            <ListItem button onPress = {Actions.home}>
              <Thumbnail  square size={80} />
              <Text>Urchin</Text>
              <Text note>Humans are the most adaptable and ambitious people among the common races.</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

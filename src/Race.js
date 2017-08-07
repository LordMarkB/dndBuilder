import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, List, ListItem, Header, Title, Content, Thumbnail, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Race extends Component {
   render(){
    return (
      <Container>
        <Header><Title>Choose Race</Title></Header>
        <Content>
          <List>
            <ListItem thumbnail button onPress = {Actions.subrace}>
              <Left>
                <Thumbnail square size={100}  source={require('../img/Dwarf.jpg')} />
              </Left>
              <Body>
                <Text>Dwarf</Text>
                <Text note>Dwarves respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and do not abandon those traditions lightly</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail button onPress = {Actions.home}>
              <Left>
                <Thumbnail  square size={100} source={require('../img/elf.jpg')} />
              </Left>
              <Body>
                <Text>Elf</Text>
                <Text note>Elves love nature and magic, art and artistry, music and poetry, and the good things of the world</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail button onPress = {Actions.home}>
              <Left>
                <Thumbnail  square size={100} source={require('../img/human.jpg')} />
              </Left>
              <Body>
                <Text>Human</Text>
                <Text note>Humans are the most adaptable and ambitious people among the common races.</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container, List, ListItem, Header, Title, Content, Thumbnail, Left, Body } from 'native-base';
import { Actions, Navbar } from 'react-native-router-flux';

const popToRoot = () => {
  Actions.popTo("home");}

export default class Subrace extends Component {

   render(){
    return (
      <Container>
        <Header><Title>Choose Subrace</Title></Header>
        <Content>
          <List>
            <ListItem thumbnail button onPress = {()=>Actions.home({hideBackImage:true})}>
              <Left>
                <Thumbnail square size={80}  source={require('../img/Dwarf.jpg')} />
              </Left>
              <Body>
                <Text>Mountain Dwarf</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail button onPress = {()=>Actions.home({hideBackImage:true})}>
              <Left>
                <Thumbnail square size={80}  source={require('../img/Dwarf.jpg')} />
              </Left>
              <Body>
                <Text>Hill Dwarf</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

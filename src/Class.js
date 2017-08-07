import axios from 'axios';
import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Left, Body, Container, List, ListItem, Header, Title, Content, Thumbnail } from 'native-base';
import { Action } from 'react-native-router-flux';

export default class Class extends Component {
  render() {
    return (
      <Container>
        <Header><Title>Choose Class</Title></Header>
        <Content>
          <List>
            <ListItem button>
              <Left>
                <Thumbnail square size={100} source={require('../img/Fighter.jpg')} />
              </Left>
              <Body>
                <Text>Fighter</Text>
                <Text note>Class with incredible melee and ranged attack skills</Text>
              </Body>
            </ListItem>
            <ListItem button>
              <Left><Thumbnail  square size={100} source={require('../img/Cleric.jpeg')} /></Left>
              <Body>
                <Text>Cleric</Text>
                <Text note>Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. </Text>
              </Body>
            </ListItem>
            <ListItem button>
              <Left><Thumbnail  square size={100} source={require('../img/wizard.jpg')} /></Left>
              <Body>
                <Text>Wizard</Text>
                <Text note>Wizards are supreme magic-users, defined and united as a class by the spells they cast. </Text>
              </Body>
          </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

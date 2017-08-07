import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './src/HomeScreen'
import Race from './src/Race'
import Class from './src/Class'
import Background from './src/Background'
import Subrace from './src/Subrace'
import Stats from './src/Stats'
// var Roll = require('roll');
// var roll = new Roll();

export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key= 'root'>
            <Scene key= "home" hidenavbar={true} component={HomeScreen} title="Create Character" initial={true} />
            <Scene key= "race" component={Race} title="Choose Race"  />
            <Scene key= "class" component={Class} title="Choose Class" />
            <Scene key= "background" component={Background} title="Choose Background" />
            <Scene key= "subrace" component={Subrace} title="Choose Subrace" />
            <Scene key= "stats" component={Stats} title="View Stats" />
          </Scene>
        </Router>
    );
  }
}

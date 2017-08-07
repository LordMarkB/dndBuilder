import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

export default class LearningIsFun extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('LearningIsFun', () => LearningIsFun);

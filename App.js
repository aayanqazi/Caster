import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/Store';
import Main from './src/Container/main';
import RouterComponent from './src/Router';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
      <RouterComponent />
      </Provider>
    );
  }
}


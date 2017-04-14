import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  ActivityIndicator
} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/Store';
import {Spinner} from "./src/Components/"
import RouterComponent from './src/Router';

export default class App extends React.Component {
  render() {
    return (
    <Provider store={Store}>
    <RouterComponent />
    </Provider>
    )
  }
}


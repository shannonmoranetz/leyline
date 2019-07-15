import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { StyleSheet, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import Controls from './Controls';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PlayerTwo/>
          <Controls/>
          <PlayerOne/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'powderblue',
  },
});

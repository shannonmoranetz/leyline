import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar, View } from 'react-native';
import Controls from './Controls';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

class App extends Component {

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

export default App;

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

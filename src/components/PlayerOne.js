import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PlayerOne extends Component {

  state = {
    playerOneLife: 20
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.lifeText}>{this.state.playerOneLife}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lifeText: {
    fontSize: 100,
  },
});

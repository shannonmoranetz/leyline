import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PlayerTwo extends Component {

  state = { playerTwoLife: 20 }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.lifeText}>{this.state.playerTwoLife}</Text>
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
    transform: [{ rotate: '180deg'}]
  },
});

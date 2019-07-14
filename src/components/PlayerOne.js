import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class PlayerOne extends Component {

  state = { playerOneLife: 20 }

  onPress = () => {
    this.setState({ playerOneLife: this.state.playerOneLife - 1 })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPress}>
          <View ></View>
        </TouchableOpacity>
        <Text style={styles.lifeText}>{this.state.playerOneLife}</Text>
        <TouchableOpacity style={styles.right} onPress={this.onPress}>
          <View ></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    borderWidth: 1,
    borderColor: '#000',
    width: '100%'
  },
  lifeText: {
    fontSize: 100,
  },
  left: {
    borderWidth: 1,
    borderColor: '#000',
    height: '100%',
    zIndex: 200,
    position: 'absolute',
    width: '50%',
    left: 0,
  },
  right: {
    borderWidth: 1,
    borderColor: '#000',
    height: '100%',
    zIndex: 200,
    position: 'absolute',
    width: '50%',
    left: Dimensions.get('window').width / 2,
  }
});

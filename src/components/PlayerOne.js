import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class PlayerOne extends Component {

  state = { playerOneLife: 20 }

  onPressMinus = () => {
    this.setState({ playerOneLife: this.state.playerOneLife - 1 })
  }

  onPressPlus = () => {
    this.setState({ playerOneLife: this.state.playerOneLife + 1 })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressMinus}>
          <View ></View>
        </TouchableOpacity>
        <Text style={styles.lifeText}>{this.state.playerOneLife}</Text>
        <TouchableOpacity style={styles.right} onPress={this.onPressPlus}>
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
    width: '100%',
  },
  lifeText: {
    fontSize: 100,
    zIndex: 200,
  },
  left: {
    backgroundColor: 'powderblue',
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: 0,
  },
  right: {
    backgroundColor: 'powderblue',
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: Dimensions.get('window').width / 2,
  },
});

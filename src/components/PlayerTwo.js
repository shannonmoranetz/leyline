import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class PlayerTwo extends Component {

  state = { playerTwoLife: 20 }

  onPressMinus = () => {
    this.setState({ playerTwoLife: this.state.playerTwoLife + 1 })
  }

  onPressPlus = () => {
    this.setState({ playerTwoLife: this.state.playerTwoLife - 1 })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressMinus}>
          <View ></View>
        </TouchableOpacity>
        <Text style={styles.lifeText}>{this.state.playerTwoLife}</Text>
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
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
  },
  lifeText: {
    fontSize: 100,
    transform: [{ rotate: '180deg'}],
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
  },
});

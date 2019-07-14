import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class PlayerTwo extends Component {

  state = { playerTwoLife: 20 }

  componentDidUpdate = () => {
    this.props.shouldReset && this.resetLife()
  }

  onPressMinus = () => {
    this.setState({ playerTwoLife: this.state.playerTwoLife + 1 })
  }

  onPressPlus = () => {
    this.setState({ playerTwoLife: this.state.playerTwoLife - 1 })
  }

  resetLife = () => {
    this.setState({ playerTwoLife: 20 })
    this.props.resetRequest()
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressMinus}>
          <View></View>
        </TouchableOpacity>
        <Text style={styles.lifeText}>{this.state.playerTwoLife}</Text>
        <TouchableOpacity style={styles.right} onPress={this.onPressPlus}>
          <View></View>
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
    transform: [{ rotate: '180deg'}],
  },
  left: {
    backgroundColor: 'lightpink',
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: 0,
  },
  right: {
    backgroundColor: 'lightpink',
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: Dimensions.get('window').width / 2,
  },
});

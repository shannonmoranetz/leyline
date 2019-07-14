import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default class Controls extends Component {

  onPressReset = () => {
    this.props.resetRequest();
  }

  onPressClose = () => {
    this.props.closeRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerControls}>
          <TouchableOpacity onPress={this.onPressClose}>
            <Image source={require('../../assets/close.png')} style={styles.closeIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressReset}>
            <Image source={require('../../assets/reset.png')} style={styles.resetIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lemonchiffon',
    height: '8.5%',
    width: '100%',
    margin: 'auto',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#000',
  },
  centerControls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resetIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  closeIcon: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  }
});

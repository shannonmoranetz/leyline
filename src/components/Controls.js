import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default class Controls extends Component {

  onPressReset = () => {
    this.props.resetRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerControls}>
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
    borderWidth: 0.5,
    borderColor: '#000',
    height: '8.5%',
    width: '100%',
    margin: 'auto'
  },
  centerControls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // borderWidth: 1,
    // borderColor: '#000',
    backgroundColor: 'palegreen',
  }
});

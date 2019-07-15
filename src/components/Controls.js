import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default class Controls extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerControls}>
          <TouchableOpacity>
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
  }
});

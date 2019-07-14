import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import Controls from './Controls';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

export default class App extends Component {

  state = { reset: false, showControls: false }

  resetRequest = () => {
    this.setState({ reset: !this.state.reset })
  }

  updateShowControls = () => {
    this.setState({ showControls: !this.state.showControls })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlayerTwo resetRequest={this.resetRequest} shouldReset={this.state.reset}/>
        { this.state.showControls && <Controls resetRequest={this.resetRequest} closeRequest={this.updateShowControls}/> }
        { this.state.showControls === false && <TouchableOpacity style={styles.unexpanded} onPress={this.updateShowControls}/> }
        <Image source={require('../../assets/triangle.png')} style={styles.triangle}/>
        <PlayerOne resetRequest={this.resetRequest} shouldReset={this.state.reset}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'powderblue',

  },
  unexpanded: {
    width: '100%',
    height: 6,
    backgroundColor: '#000',
  },
  triangle: {
    height: 8,
    width: 30,
    position: 'relative',
    zIndex: 2,
  }
});

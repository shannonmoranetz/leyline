import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aLifePlus, aLifeMinus } from '../actions';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, pointerEvents } from 'react-native';

class PlayerOne extends Component {

  onPressPlus = () => {
    this.props.aLifePlus(this.props.aLife);
  }

  onPressMinus = () => {
    this.props.aLifeMinus(this.props.aLife);
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressMinus}>
          <View></View>
        </TouchableOpacity>
        <View pointerEvents='none'>
          <Text style={styles.lifeText}>{this.props.aLife}</Text>
        </View>
        <TouchableOpacity style={styles.right} onPress={this.onPressPlus}>
          <View></View>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  aLife: state.aLife,
});

export const mapDispatchToProps = dispatch => ({
  aLifePlus: (aLife) => dispatch(aLifePlus(aLife)),
  aLifeMinus: (aLife) => dispatch(aLifeMinus(aLife)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerOne);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  lifeText: {
    fontSize: 128,
    zIndex: 100
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
    zIndex: -100
  },
});

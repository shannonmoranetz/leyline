import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aLifePlus, aLifePlusMulti, aLifeMinus, aLifeMinusMulti, confirm } from '../actions';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Vibration } from 'react-native';

class PlayerOne extends Component {

  onPressPlus = () => {
    this.props.aLifePlus(this.props.aLife);
    this.props.isConfirmed && this.props.confirm(false)
  }

  onPressMinus = () => {
    this.props.aLife > 0 && this.props.aLifeMinus(this.props.aLife);
  }

  onLongPressPlus = () => {
    this.props.aLifePlusMulti(this.props.aLife);
    Vibration.vibrate(30);
  }

  onLongPressMinus = () => {
    if ( this.props.aLife !== 0 ) {
      this.props.aLifeMinusMulti(this.props.aLife);
      Vibration.vibrate(30);
    } else {
      this.props.aLifeMinusMulti(this.props.aLife);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressMinus} onLongPress={this.onLongPressMinus}>
          <View></View>
        </TouchableOpacity>
        <View pointerEvents='none'>
          <Text style={styles.lifeText}>{this.props.aLife}</Text>
        </View>
        <TouchableOpacity style={styles.right} onPress={this.onPressPlus} onLongPress={this.onLongPressPlus}>
          <View></View>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  aLife: state.aLife,
  isConfirmed: state.isConfirmed,
});

export const mapDispatchToProps = dispatch => ({
  aLifePlus: (aLife) => dispatch(aLifePlus(aLife)),
  aLifePlusMulti: (aLife) => dispatch(aLifePlusMulti(aLife)),
  aLifeMinus: (aLife) => dispatch(aLifeMinus(aLife)),
  aLifeMinusMulti: (aLife) => dispatch(aLifeMinusMulti(aLife)),
  confirm: (isConfirmed) => dispatch(confirm(isConfirmed)),
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

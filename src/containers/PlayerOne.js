import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aLifePlus, aLifePlusMulti, aLifeMinus, aLifeMinusMulti, confirm } from '../actions';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Vibration } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

class PlayerOne extends Component {

  state = { fontLoaded: false, };

  componentDidMount = async() => {
    await Font.loadAsync({
      'Oxygen-Bold': require('../../assets/Oxygen-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  onPressPlus = () => {
    this.props.aLifePlus(this.props.aLife);
    this.props.isConfirmed && this.props.confirm(false);
  }

  onPressMinus = () => {
    this.props.aLife > 0 && this.props.aLifeMinus(this.props.aLife);
    this.props.isConfirmed && this.props.confirm(false);
  }

  onLongPressPlus = () => {
    this.props.aLifePlusMulti(this.props.aLife);
    Vibration.vibrate(30);
    this.props.isConfirmed && this.props.confirm(false);
  }

  onLongPressMinus = () => {
    if ( this.props.aLife !== 0 ) {
      this.props.aLifeMinusMulti(this.props.aLife);
      Vibration.vibrate(30);
      this.props.isConfirmed && this.props.confirm(false);
    } else {
      this.props.aLifeMinusMulti(this.props.aLife);
      this.props.isConfirmed && this.props.confirm(false);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressMinus} onLongPress={this.onLongPressMinus}>
          <LinearGradient colors={['rgba(211,255,252,1)', 'rgba(64,219,241,1)', 'rgba(20,168,224,1)', 'rgba(10,118,179,1)'] } style={styles.gradient}>
            <View></View>
          </LinearGradient>
        </TouchableOpacity>
        <View pointerEvents='none'>
          { this.state.fontLoaded ? (<Text style={styles.lifeText}>{this.props.aLife}</Text>) : null }
        </View>
        <TouchableOpacity style={styles.right} onPress={this.onPressPlus} onLongPress={this.onLongPressPlus}>
          <LinearGradient colors={['rgba(211,255,252,1)', 'rgba(64,219,241,1)', 'rgba(20,168,224,1)', 'rgba(10,118,179,1)'] } style={styles.gradient}>
            <View></View>
          </LinearGradient>
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
    fontSize: 132,
    zIndex: 100,
    fontFamily: 'Oxygen-Bold',
    letterSpacing: 2,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
  left: {
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: 0,
  },
  right: {
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: Dimensions.get('window').width / 2,
    zIndex: -100
  },
  gradient: {
    flex: 1,
  },
});

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bLifePlus, bLifePlusMulti, bLifeMinus, bLifeMinusMulti, confirm } from '../actions';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Vibration } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

class PlayerTwo extends Component {

  state = { fontLoaded: false, };

  componentDidMount = async() => {
    await Font.loadAsync({
      'Oxygen-Bold': require('../../assets/Oxygen-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  onPressPlus = () => {
    this.props.bLifePlus(this.props.bLife);
    this.props.isConfirmed && this.props.confirm(false);
  }

  onPressMinus = () => {
    this.props.bLife > 0 && this.props.bLifeMinus(this.props.bLife);
    this.props.isConfirmed && this.props.confirm(false);
  }

  onLongPressPlus = () => {
    this.props.bLifePlusMulti(this.props.bLife);
    Vibration.vibrate(30);
    this.props.isConfirmed && this.props.confirm(false);
  }

  onLongPressMinus = () => {
    if ( this.props.bLife !== 0 ) {
      this.props.bLifeMinusMulti(this.props.bLife);
      Vibration.vibrate(30);
      this.props.isConfirmed && this.props.confirm(false);
    } else {
      this.props.bLifeMinusMulti(this.props.bLife);
      this.props.isConfirmed && this.props.confirm(false);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressPlus} onLongPress={this.onLongPressPlus}>
          <LinearGradient colors={['rgba(5,131,77,1)', 'rgba(57,198,137,1)', 'rgba(125,236,187,1)', 'rgba(239,255,245,1)'] } style={styles.gradient}>
            <View></View>
          </LinearGradient>
        </TouchableOpacity>
        <View pointerEvents='none'>
          { this.state.fontLoaded ? (<Text style={styles.lifeText}>{this.props.bLife}</Text>) : null }
        </View>
        <TouchableOpacity style={styles.right} onPress={this.onPressMinus} onLongPress={this.onLongPressMinus}>
          <LinearGradient colors={['rgba(5,131,77,1)', 'rgba(57,198,137,1)', 'rgba(125,236,187,1)', 'rgba(239,255,245,1)'] } style={styles.gradient}>
            <View></View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  bLife: state.bLife,
  isConfirmed: state.isConfirmed,
});

export const mapDispatchToProps = dispatch => ({
  bLifePlus: (bLife) => dispatch(bLifePlus(bLife)),
  bLifePlusMulti: (bLife) => dispatch(bLifePlusMulti(bLife)),
  bLifeMinus: (bLife) => dispatch(bLifeMinus(bLife)),
  bLifeMinusMulti: (bLife) => dispatch(bLifeMinusMulti(bLife)),
  confirm: (isConfirmed) => dispatch(confirm(isConfirmed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwo);

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
    transform: [{ rotate: '180deg'}],
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

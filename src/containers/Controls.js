import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aLifeReset, bLifeReset, confirm } from '../actions';
import { StyleSheet, Image, View, TouchableOpacity, Animated, Easing, Vibration } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Controls extends Component {

  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.spin(0, Easing.linear);
  }

  componentDidUpdate = () => {
    !this.props.isConfirmed && this.spin(1200, Easing.bounce);
  }

  onPressReset = async() => {
    if (this.props.isConfirmed) {
      await this.props.aLifeReset();
      await this.props.bLifeReset();
      Vibration.vibrate([0, 90, 85, 90]);
      await this.props.confirm(false)
      this.spin(800, Easing.bounce);
    } else {
      await this.props.confirm(true)
      this.spin(300, Easing.ease);
    }
  }

  spin = (timing, ease) => {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: ease
      }
    ).start();
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['280deg', '0deg']
    });
    const spinBack = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '280deg']
    });
    return (
      <View style={styles.container}>
        <LinearGradient colors={['rgba(245,245,245,.8)', 'rgba(235,235,235,.8)', 'rgba(235,235,235,.8)', 'rgba(245,245,245,.8)'] } locations={[0, .15, 0.85, 1]} style={styles.gradient}>
        <View style={styles.buttonPositions}>
          <TouchableOpacity onPress={this.onPressReset}>
            <Animated.Image source={require('../../assets/reset.png')} 
                            style={ !this.props.isConfirmed ? {width: 30, height: 30, transform: [{rotate: spin}]} :
                            {width: 30, height: 30, transform: [{rotate: spinBack}]} }/>
          </TouchableOpacity>
        </View>
        </LinearGradient>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  isConfirmed: state.isConfirmed,
});

export const mapDispatchToProps = dispatch => ({
  aLifeReset: () => dispatch(aLifeReset()),
  bLifeReset: () => dispatch(bLifeReset()),
  confirm: (isConfirmed) => dispatch(confirm(isConfirmed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);

const styles = StyleSheet.create({
  container: {
    height: '8.5%',
    width: '100%',
    margin: 'auto',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: 'rgba(250,250,250,.8)',
  },
  buttonPositions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gradient: {
    flex: 1,
  },
});

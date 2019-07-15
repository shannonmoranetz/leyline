import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aLifeReset, bLifeReset, confirm } from '../actions';
import { StyleSheet, Image, View, TouchableOpacity, Animated, Easing } from 'react-native';

class Controls extends Component {

  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.spin(0, Easing.linear);
  }

  onPressReset = async() => {
    if (this.props.isConfirmed) {
      await this.props.aLifeReset();
      await this.props.bLifeReset();
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
        <View style={styles.buttonPositions}>
          <TouchableOpacity onPress={this.onPressReset}>
            <Animated.Image source={require('../../assets/reset.png')} 
                            style={ !this.props.isConfirmed ? {width: 35, height: 35, transform: [{rotate: spin}]} : 
                            {width: 35, height: 35, transform: [{rotate: spinBack}]} }/>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'lemonchiffon',
    height: '8.5%',
    width: '100%',
    margin: 'auto',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#000',
  },
  buttonPositions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

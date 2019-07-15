import React, { Component } from 'react';
import { connect } from 'react-redux';
import { aLifeReset, bLifeReset } from '../actions';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

class Controls extends Component {

  onPressReset = async() => {
    await this.props.aLifeReset();
    await this.props.bLifeReset();
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

export const mapStateToProps = state => ({
  aLife: state.aLife,
  bLife: state.bLife,
});

export const mapDispatchToProps = dispatch => ({
  aLifeReset: () => dispatch(aLifeReset()),
  bLifeReset: () => dispatch(bLifeReset()),
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bLifePlus, bLifeMinus } from '../actions';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

class PlayerTwo extends Component {

  onPressPlus = () => {
    this.props.bLifePlus(this.props.bLife);
  }

  onPressMinus = () => {
    this.props.bLifeMinus(this.props.bLife);
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressPlus}>
          <View></View>
        </TouchableOpacity>
        <Text style={styles.lifeText}>{this.props.bLife}</Text>
        <TouchableOpacity style={styles.right} onPress={this.onPressMinus}>
          <View></View>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  bLife: state.bLife,
});

export const mapDispatchToProps = dispatch => ({
  bLifePlus: (bLife) => dispatch(bLifePlus(bLife)),
  bLifeMinus: (bLife) => dispatch(bLifeMinus(bLife)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
  },
  lifeText: {
    fontSize: 100,
    zIndex: 200,
    transform: [{ rotate: '180deg'}],
  },
  left: {
    backgroundColor: 'lightpink',
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: 0,
  },
  right: {
    backgroundColor: 'lightpink',
    height: '100%',
    position: 'absolute',
    width: '50%',
    left: Dimensions.get('window').width / 2,
  },
});
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bLifePlus, bLifePlusMulti, bLifeMinus, bLifeMinusMulti } from '../actions';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

class PlayerTwo extends Component {

  onPressPlus = () => {
    this.props.bLifePlus(this.props.bLife);
  }

  onPressMinus = () => {
    this.props.bLifeMinus(this.props.bLife);
  }

  onLongPressPlus = () => {
    this.props.bLifePlusMulti(this.props.bLife);
  }

  onLongPressMinus = () => {
    this.props.bLifeMinusMulti(this.props.bLife);
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.onPressPlus} onLongPress={this.onLongPressPlus}>
          <View></View>
        </TouchableOpacity>
        <View pointerEvents='none'>
          <Text style={styles.lifeText}>{this.props.bLife}</Text>
        </View>          
        <TouchableOpacity style={styles.right} onPress={this.onPressMinus} onLongPress={this.onLongPressMinus}>
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
  bLifePlusMulti: (bLife) => dispatch(bLifePlusMulti(bLife)),
  bLifeMinus: (bLife) => dispatch(bLifeMinus(bLife)),
  bLifeMinusMulti: (bLife) => dispatch(bLifeMinusMulti(bLife)),
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
    fontSize: 128,
    zIndex: 100,
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
    zIndex: -100
  },
});

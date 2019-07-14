import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Controls from './Controls';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerTwo/>
      <Controls/>
      <PlayerOne/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
});

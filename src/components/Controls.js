import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Controls() {
  return (
    <View style={styles.container}>
      <View style={styles.centerControls}>
        <Text style={styles.controlIcons}>Reset</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: '8.5%',
    width: '100%',
    margin: 'auto'
  },
  centerControls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlIcons: {
    textAlign: 'center',
  },
});

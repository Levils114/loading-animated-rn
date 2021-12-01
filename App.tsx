import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent/>
      <Loading size={100}/>
      <Text style={styles.loadingLabel}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingLabel: {
    color: "#FFF",
    marginTop: 24,
  }
});

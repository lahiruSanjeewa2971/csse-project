import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import CreateOrder from './screens/CreateOrder';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateOrder/> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05332c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

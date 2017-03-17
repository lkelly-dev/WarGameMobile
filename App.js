import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FullGame from './Game';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
         
      <FullGame />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
  <Text>Changes you make will automatically happen.</Text>
</View> */}

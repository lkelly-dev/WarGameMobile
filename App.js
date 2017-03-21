import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import FullGame from './Game';
import { Constants } from 'expo';

import { StackNavigator } from 'react-navigation';

class Settings extends React.Component {
  static navigationOptions = {
     title: 'Settings',
   };
  render() {
    return <Text>List of all settings</Text>
  }
}

const MainScreenNavigator = StackNavigator({
  Main: {screen: FullGame},
  All: {screen: Settings}
});



export default class App extends React.Component {
  render() {
    console.log(Constants.statusBarHeight + "Hello");
    return (
      <MainScreenNavigator style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    marginTop: Constants.statusBarHeight,

  },
});

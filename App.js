import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import 'react-native-gesture-handler';
import AppNavigator from './Navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

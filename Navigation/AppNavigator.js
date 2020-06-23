import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './../Screens/HomeScreen'
import MainScreen from './../Screens/MainScreen'
import EditScreen from './../Screens/EditScreen'

import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'メモ帳'}}/>
          <Stack.Screen name="EditScreen" component={EditScreen}  options={{title: 'メモ登録'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

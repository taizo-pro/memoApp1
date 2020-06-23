import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button
} from 'react-native';
import {Header, Container} from 'native-base';
import MainScreen from './MainScreen'
import EditScreen from './EditScreen'
import {Provider as PaperProvider} from 'react-native-paper';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PaperProvider>
        <Container>
          <SafeAreaView>
            <MainScreen />
            <Button 
              title='登録画面へ'
              onPress={() => this.props.navigation.navigate('EditScreen')}
            /> 
            <Button 
              style={{}}
              title='+'
              onPress={() => this.props.navigation.navigate('EditScreen')}
            /> 
          </SafeAreaView>
        </Container>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({});

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {Header, Container} from 'native-base';
import MainScreen from './MainScreen'
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
            <Header style={{backgroundColor: 'white'}}>
              <Text>メモ帳</Text>
            </Header>
            <MainScreen />
          </SafeAreaView>
        </Container>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({});

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
import {Header, Container, ListItem, Textarea, Form, Content, Button} from 'native-base';
import {Title, List} from 'react-native-paper';

export default class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Container>
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="メモを入力してください" />
          </Form>
          <Button style={{}}>
            <Text>登録する</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
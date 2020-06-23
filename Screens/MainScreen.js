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
import {Header, Container, ListItem, Textarea} from 'native-base';
import {Title, List} from 'react-native-paper';

const Data = [
  {
    text: 'メモメモメモ',
    // createAt: '1592889401',
  },
  {
    text: 'メモメモメモ',
    // createAt: '1592889402',
  },
  {
    text: '長いメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ',
    // createAt: '1592889403',
  },
  {
    text: 'メモメモメモ',
    // createAt: '1592889404',
  },
];

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    };
  }

  render() {
    const year = this.state.today.getFullYear();
    const month = this.state.today.getMonth() + 1;
    const date = this.state.today.getDate();

    return (
      <View style={{backgroundColor: 'yellow'}}>
        <FlatList
          // 配列を登録する。
          data={Data}
          // 配列内のデータからキーを生成する時に必要な変数関数を登録する。文字列を返す。
          keyExtractor={item => item.createAt}
          // データ1つ分を表示するためのJSXを定義する。1つ分のデータは引数で渡される。
          renderItem={({item}) => (
            <List.Item
              title={item.text}
              titleNumberOfLines={5}
              description={'作成日時: ' + year + '年' + month + '月' + date + '日'}
              descriptionStyle={{textAlign: 'right'}}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

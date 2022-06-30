import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import Nav from './components/Nav';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startResultsHandler () {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Nav />
      <Header />
      <Input changeScreen={startResultsHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

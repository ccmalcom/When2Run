import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import Header from './components/Header';
import Input from './components/Input';
import Nav from './components/Nav';

export default function App() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let locationObj = await Location.getCurrentPositionAsync({});
      setLocation(locationObj.coords);
    })();
  }, []);
console.log(location);
  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify({
  //     location:{
  //       latitude: location.latitude,
  //       longitude: location.longitude,
  //     }});
  //   console.log(text)
  // }

  // function onLoad () {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //   )};

  // useEffect(() => {
  //   onLoad();
  // }, []);

  return (
    <>
      <StatusBar style="light" />
        <View style={styles.container}>
          <Nav />
          <Header />
          <Input location={location}/>
        </View>
    </>
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

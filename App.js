import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import WeatherScreen from './screens/WeatherScreen.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Nav />
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

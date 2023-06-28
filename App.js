import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import HomeScreen from './screens/HomeScreen.js';
import WeatherScreen from './screens/WeatherScreen.js';
import Nav from './components/Nav.js';
import ProfileScreen from './screens/ProfileScreen.js';

const Stack = createStackNavigator();

export default function App() {

  const [userProfile, setUserProfile] = useState({});

  handleProfileSubmit = (userProfile) => {
    setUserProfile(userProfile);
  };

  return (
    <SafeAreaProvider>
      {userProfile ?
        <ProfileScreen setUserProfile={handleProfileSubmit} />
        :
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
      }
    </SafeAreaProvider>

  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import Header from '../components/Header';
import Input from '../components/Input';

export default function WeatherScreen() {
    const [location, setLocation] = useState({});
    const [locationPermission, setLocationPermission] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            } else {
                setLocationPermission(true);
                let locationObj = await Location.getCurrentPositionAsync({});
                setLocation(locationObj.coords);
                setShowButton(true)
            }
        })();
    }, []);
    console.log(location);

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <Header />
                <Input location={location} locationPermission={locationPermission} showButton={showButton} />
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
        paddingBottom: 20,
    },
});

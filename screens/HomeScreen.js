import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const goToWeatherScreen = () => {
        navigation.navigate('Weather');
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to My Running App!</Text>
                <Button title="Can I Run?" onPress={goToWeatherScreen} />
                <Text style={styles.description}>Check if it is safe to run in your area, based on Heat Index</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        marginBottom: 16,
    },
});

export default HomeScreen;

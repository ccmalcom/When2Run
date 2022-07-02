import {
    Text, Pressable, StyleSheet, View, TextInput,
    Modal, Image
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { getWeatherData } from "../helpers/Calculations";


const Input = (props) => {
    const [zip, setZip] = useState('');
    const [result, setResult] = useState({ canRun: 'Crunching the numbers...' });
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { latitude, longitude } = props.location;
    let location = `${latitude},${longitude}`;

    async function handleSubmit() {
        setIsModalVisible(true);
        if (location) {
            console.log(`location submitted: ${location}`);
            setResult(await getWeatherData(location));
        } else {
            console.log(`zip submit: ${zip}`);
            setResult(await getWeatherData(zip));
        }
        console.log(result);
    }

    return (
        <View style={styles.container}>
            {!location ? (
                <View>
                    <Text>Enter your zipcode</Text>
                    <TextInput style={styles.input} placeholder="90210" onChangeText={setZip} />
                </View>) : null}
            <View >
                <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text>Check</Text>
                </Pressable>
            </View>
            <Modal visible={isModalVisible} animationType='fade'>
                <StatusBar style="dark" />
                <View style={styles.modal}>
                    <Text>
                        {result.canRun}
                        {result.city}
                        {result.t}
                        {result.rh}
                        {result.condition}
                        {result.hi}
                        {result.icon}
                    </Text>
                    <Image  style={styles.image} source={{ uri: `https:${result.icon}` }} />
                </View>
            </Modal>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#f194ff',
        padding: 10,
        margin: 10,
        marginBottom: 60,
        borderRadius: 90,
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white'
    },
});

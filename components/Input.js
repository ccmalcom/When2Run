import {
    Text, Pressable, StyleSheet, View, TextInput, Button, ActivityIndicator
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { getWeatherData } from "../helpers/Calculations";
import Results from "./Results";


const Input = (props) => {
    const [zip, setZip] = useState('');
    const [result, setResult] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { latitude, longitude } = props.location;
    let location = `${latitude},${longitude}`;
    
    
    async function handleGeoSubmit() {
        if (props.locationPermission && !fetched) {
            setIsModalVisible(true);
            setIsLoading(true);
            console.log(`location submitted: ${location}`);
            setResult(await getWeatherData(location));
            setTimeout(()=> setIsLoading(false), 500)
            // setIsLoading(false);
            setFetched(true);
        } else {
            setIsModalVisible(true);
            console.log('no fetch')
        }
    }
    
    async function handleZipSubmit() {
        if (zip !== '') {
            setIsModalVisible(true);
            setFetched(false);
            if(zip !== result.location){
                setIsLoading(true);
                setResult({});
                console.log(`location submitted: ${zip}`);
                setResult(await getWeatherData(zip));
                setTimeout(()=> setIsLoading(false), 500)
            } else console.log('no fetch')
        } else {
            console.log(`error - no zip entered`);
        }
    }

    

    return (
        <View style={styles.container}>
            <View>
                <Text>Enter your zipcode</Text>
                <View style={styles.buttonContainer}>
                    <TextInput style={styles.input} placeholder="90210" onChangeText={setZip} />
                    <Button title="Go" onPress={handleZipSubmit} color='red'/>
                </View>
            </View>
            <View>
                <Text>Or</Text>
            </View>
            { props.showButton ?
            <> 
            <Pressable onPress={handleGeoSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Check my location</Text>
            </Pressable></> : <ActivityIndicator color='red'/>
            
            }
            <Results result={result} isVisible={isModalVisible} setVisible={setIsModalVisible} isLoading={isLoading}/>
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
        width: '100%',
        paddingBottom: 140
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 90,
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }

});

import { Text, View, Modal, StyleSheet, Image, Button, ActivityIndicator, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';




const Results = (props) => {
    const [time, setTime] = useState({});
    let result = props.result;
    const [bg, setBg] = useState();
    const [theme, setTheme] = useState('dark');
    let text = theme === 'dark' ? styles.text : styles.lightText;
    let statsText = theme === 'dark' ? styles.stats : styles.statsLight;
    let statsLabel = theme === 'dark' ? styles.statsLabel : styles.statsLabelLight;
    let heading = theme === 'dark' ? styles.heading : styles.headingLight;

    useEffect(() => {
        let time = getCurrentTime();
        console.log(time);
        if(time.hh > 6 && time.hh < 8){
            setBg(require('../assets/1.png'))
            setTheme('dark');
        } else if( time.hh >= 8 && time.hh <10){
            setBg(require('../assets/2.png'))
            setTheme('dark');
        } else if(time.hh >=10 && time.hh <13){
            setBg(require('../assets/3.png'))
            setTheme('dark');
        } else if(time.hh >=13 && time.hh <16){
            setBg(require('../assets/4.png'))
            setTheme('dark');
        } else if(time.hh >=16 && time.hh <19){
            setBg(require('../assets/5.png'))
            setTheme('dark');
        } else if(time.hh >=19 && time.hh <21){
            setBg(require('../assets/6.png'));
            setTheme('dark');
        } else if(time.hh >=21 && time.hh <22){
            setBg(require('../assets/7.png'));
            setTheme('light');
        } else if(time.hh >=23 || time.hh<6){
            setBg(require('../assets/8.png'));
            setTheme('light');
        } 
        setTime(time.hh>12? `${time.hh-12}:${time.mm} PM`: `${time.hh}:${time.mm} AM` );
    }, []);
    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return obj = {
            hh: hours,
            mm: minutes,
            ss: seconds,
        } 
    }
    return (
        <Modal visible={props.isVisible} animationType='fade'>
            <StatusBar style={theme}/>
            <ImageBackground source={bg} style={styles.bgImage}>
                <View style={styles.modal}>
                    {props.isLoading ?
                        <View style={styles.loadingContainer}>
                            <Text style={styles.warning}>Loading...</Text>
                            <ActivityIndicator color='red' size='large' />
                        </View>
                        :
                        <>
                            <View>
                                <Text style={result.hi !== 1 ? heading : styles.warning}>{result.canRun}</Text>
                            </View>
                            <View style={styles.container}>
                                <View style={styles.infoContainer}>
                                    <Image style={styles.image} source={{ uri: `https:${result.icon}` }} />
                                    <Text style={text}>{result.condition}</Text>
                                    <Text style={text}>{result.city},{result.state}</Text>
                                    <Text style={text}>{time}</Text>
                                </View>
                                <View style={styles.statContainer}>
                                    <View>
                                        <Text style={statsLabel}>Temperature</Text>
                                        <Text style={statsText}>{result.t}</Text>
                                    </View>
                                    <View>
                                        <Text style={statsLabel}>Humidity</Text>
                                        <Text style={statsText}>{result.rh}</Text>
                                    </View>
                                    <View>
                                        <Text style={statsLabel}>Heat Index</Text>
                                        <Text style={statsText}>{result.hi}</Text>
                                    </View>
                                </View>
                            </View>
                            <Button title="Check again" onPress={props.setVisible} color='red' />
                        </>
                    }
                </View>
            </ImageBackground>
        </Modal>
    );
};

export default Results;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 140,
    },
    container: {
        width: '80%'
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35
    },
    image: {
        width: 150,
        height: 150,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        textAlign: 'center',
        color: 'black'
    },
    headingLight: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        textAlign: 'center',
        color: 'white'
    },
    statContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    stats: {
        textAlign: 'center',
        margin: 10,
        color: 'black'
    },
    statsLight: {
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
        color: 'black'
    },
    lightText:{
        textAlign: 'center',
        marginBottom: 10,
        color: 'white' 
    },
    statsLabel: {
        fontWeight: 'bold',
        color: 'black'
    },
    statsLabelLight:{
        fontWeight: 'bold',
        color: 'white'
    },
    warning: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        textAlign: 'center',
        color: 'red'
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bgImage:{
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center'
    }
});
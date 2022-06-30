import { Text, Pressable, StyleSheet, View, TextInput } from "react-native";

const Input = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Enter your zipcode</Text>
                <TextInput style={styles.input} placeholder="90210" />
            </View>
            <View >
                <Pressable onPress={props.changeScreen} style={styles.button}>
                    <Text>Check</Text>
                </Pressable>
            </View>
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
});

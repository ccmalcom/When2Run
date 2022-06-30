import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Howdy,</Text>
            <Text>Runner</Text>
        </View>
    )};

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 2,
        backgroundColor: '#fff',
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
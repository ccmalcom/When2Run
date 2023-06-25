import { View, Text, StyleSheet } from 'react-native';

const Nav = () => {
    return (
        <View style={styles.navContainer}>
            <Text style={styles.navText}>When2Run</Text>
        </View>
    );
}

export default Nav;

const styles = StyleSheet.create({
    navText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        paddingTop: 20
    },
    navContainer: {
        backgroundColor: 'black',
        height: 100,
        paddingTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
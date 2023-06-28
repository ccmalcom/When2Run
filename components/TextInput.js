import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ label, placeholder, value, onChangeText, onFocus, onBlur, isFocused }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isFocused && { color: 'blue' }]}>
                {label}
            </Text>
            <RNTextInput
                placeholder={placeholder}
                value={value}
                style={styles.dropdown}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        width: '100%',
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '100%',
    },
});

export default TextInput;

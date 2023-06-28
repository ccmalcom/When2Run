import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';

const Dropdown = ({ label, data, value, onChange, onFocus, onBlur, isFocused }) => {
    const renderLabel = () => {
        if (value || isFocused) {
            return (
                <Text style={[styles.label, isFocused && { color: 'blue' }]}>
                    {label}
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <RNEDropdown
                style={[styles.dropdown, isFocused && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                labelField="label"
                valueField="value"
                data={data}
                value={value}
                maxHeight={200}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },

});

export default Dropdown;

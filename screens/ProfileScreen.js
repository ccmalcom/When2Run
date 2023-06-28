import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/themed';
// import { Dropdown } from 'react-native-element-dropdown';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';


class User {
    constructor(firstName, lastName, DOB, homeLocation, runningTime, perfectTemp, tempUnit) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.homeLocation = homeLocation;
        this.runningTime = runningTime;
        this.perfectTemp = perfectTemp;
        this.tempUnit = tempUnit;
    }
}
const ProfileScreen = (props) => {
    // Add your profile creation logic here
    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        DOB: '',
        homeLocation: '',
        runningTime: '',
        perfectTemp: '',
        tempUnit: '',
    });

    const [focusedInput, setFocusedInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    // const [runTimeValue, setRunTimeValue] = useState(null);
    // const [tempUnitValue, setTempUnitValue] = useState(null);


    const tempUnits = [
        { label: 'Celsius', value: 'celsius' },
        { label: 'Fahrenheit', value: 'fahrenheit' },
    ];
    const runTimeOptions = [
        { label: 'Morning', value: 'morning' },
        { label: 'Afternoon', value: 'afternoon' },
        { label: 'Evening', value: 'evening' },
        { label: 'Night', value: 'night' },
    ];



    const handleProfileSubmit = () => {
        const updatedUserProfile = new User(
            inputValues.firstName,
            inputValues.lastName,
            inputValues.DOB,
            inputValues.homeLocation,
            inputValues.runningTime,
            inputValues.perfectTemp,
            inputValues.tempUnit
        );
        //props.handleProfileSubmit(updatedUserProfile);
        console.log('Profile submitted, :', updatedUserProfile);
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };

    const handleInputChange = (name, value) => {
        setInputValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'runningTime' || name === 'tempUnit') {
            setIsFocused(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Your Profile</Text>
            <TextInput
                placeholder="First Name"
                label="First Name"
                value={inputValues.firstName}
                onChangeText={(text) => handleInputChange('firstName', text)}
                onFocus={() => handleFocus('firstName')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'firstName'}
            />
            <TextInput
                placeholder="Last Name"
                label="Last Name"
                value={inputValues.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
                onFocus={() => handleFocus('lastName')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'lastName'}
            />
            <TextInput
                placeholder="MM/DD/YYYY"
                label="Birthday"
                value={inputValues.DOB}
                onChangeText={(text) => handleInputChange('DOB', text)}
                onFocus={() => handleFocus('DOB')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'DOB'}
            />
            <TextInput
                placeholder="90210"
                label="Home Zip Code"
                value={inputValues.homeLocation}
                onChangeText={(text) => handleInputChange('homeLocation', text)}
                onFocus={() => handleFocus('homeLocation')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'homeLocation'}
            />
            <Dropdown
                label="Preferred Running Time"
                data={runTimeOptions}
                value={runTimeValue}
                onChange={(item) => { handleInputChange('runningTime', item.value); }}
                onFocus={() => handleFocus('runningTime')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'runningTime'}
            />
            <TextInput
                placeholder="86"
                label="Perfect Temperature"
                value={inputValues.perfectTemp}
                onChangeText={(text) => handleInputChange('perfectTemp', text)}
                onFocus={() => handleFocus('perfectTemp')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'perfectTemp'}
            />
            <Dropdown
                label="Temperature Units"
                data={tempUnits}
                value={tempUnitValue}
                onChange={(item) => { handleInputChange('tempUnit', item.value); }}
                onFocus={() => handleFocus('tempUnit')}
                onBlur={handleBlur}
                isFocused={focusedInput === 'tempUnit'}
            />
            <Button
                title="Submit"
                onPress={() => handleProfileSubmit()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
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
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputContainer: {
        padding: 16,
        width: '100%',
    },
    inputContainer2: {
        width: '100%',
        marginBottom: 16,
    },
    input2: {
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 8,
    },
    inputText2: {
        flex: 1,
        fontSize: 16,
    },
});

export default ProfileScreen;

import React , {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

const Input= ({value}) => {
    return (
        <View>
    <Text>Arsalan Sabir </Text>
    <TextInput 
    value = { value }
    />
    </View>
    )
}

export {Input};
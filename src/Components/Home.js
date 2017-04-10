import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return <View style={styles.conatiner}><Text>Hello World</Text> </View>
}

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#f2f2f2',
        paddingTop: 40,
    }
})

export { Home };
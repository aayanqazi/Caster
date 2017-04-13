import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card,CardSection,Spinner} from '../Components/';

const Home = (props) => {
    console.log(props.data.isProcessing)
    return (
        <Spinner />
    )
}



export { Home };
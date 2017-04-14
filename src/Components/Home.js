import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card, CardSection,Spinners,NewsList} from '../Components/';

const Home = (props) => {
    console.log(props.data)
    return ( 
    <Card>
        {props.data.isProcessing?<CardSection><Spinners /></CardSection>:<NewsList data={props.data.news}/>}
        
    </Card>
    )
}



export { Home };
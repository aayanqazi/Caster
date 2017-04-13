import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Card,CardSection} from "./"
const Spinner = () => {
    return(
        <View style={styles.spinnerStyle}>
        <ActivityIndicator size='small' />
        </View>
    )
}

const styles = {
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:45,
    }
}

export {Spinner};
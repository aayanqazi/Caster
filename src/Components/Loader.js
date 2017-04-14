import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';

const Spinners = () => {
    return (
        <View style={{flex:1}}>
            <Spinner visible={true} textContent="Please Wait ...." textStyle={{color: '#FFF'}} />
            </View>
    )
}

export {Spinners}
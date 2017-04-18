import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from "./";
import { View, Text } from 'react-native';

const Spinners = (props) => {
    console.log("Loader", props)
    return (
        <View style={{ flex: 1 }}>
            <Spinner visible={true} size="small" cancelable={true}>
                <View style={style.textContainer}>
                    <Text style={style.textContent}> Please Wait </Text>
                <Button onPress={()=> props.cancel}> Cancell </Button>
                </View>
            </Spinner>
        </View>
    )
}

const style = {
    textContainer: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    textContent: {
    top: 10,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  }

}

export { Spinners }
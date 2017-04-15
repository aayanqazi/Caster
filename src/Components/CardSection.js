import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    console.log(props);
    return (
            <View style={style.containerStyle} >
            {props.children}
            </View>
    );
};


const style = {
    containerStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
};

export {CardSection};

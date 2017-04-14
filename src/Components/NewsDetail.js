import React from 'react';
import { View, Text, Image ,Linking} from 'react-native';
import {Card,CardSection} from './';
import Button from "./Button";

const NewsDetail = (props) => {
    return ( <Card>
            <CardSection>
                <Text>{props.data.title}  </Text>
            </CardSection>

        </Card>
    );
};

const style = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 20,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export {NewsDetail};

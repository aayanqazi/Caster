import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection } from './';
import { Button } from "./";

const NewsDetail = (props) => {
    return (props.section ? <Card>
        <CardSection>
            <View style={style.thumbnailContainerStyle}>
                <Image
                    source={{ uri: props.data.urlToImage }}
                    style={style.thumbnailStyle}
                />
            </View>
            <View style={style.textContainer}>
                <Text style={style.headerTextStyle} onPress={() => Linking.openURL(props.data.url)}>{props.data.title} </Text>
                <Text>By {props.data.author} </Text>
                <Text>{props.data.publishedAt} </Text>
            </View>
        </CardSection>
        <CardSection>
            <Image style={style.imageStyle} source={{ uri: props.data.urlToImage }} />
        </CardSection>
        <CardSection>
            <View style={style.desc}>
                <Text>{props.data.description} </Text>
            </View>
            <View>
                <Button onPress={() => Linking.openURL(props.data.url)}> Show More </Button>
            </View>
        </CardSection>

    </Card> : <Card>
            <CardSection>
                <View style={style.textContainer}>
                <Text style={style.headerTextStyle} onPress={() => Linking.openURL(props.data.url)}>{props.data.description} </Text>
                <Text>By {props.data.name} </Text>
                <Text>language: {props.data.language} </Text>
            </View>
            </CardSection>
        </Card>
    );
};

const style = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1
    },
    desc: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    headerTextStyle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export { NewsDetail };

import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Picker,
} from 'react-native';
import { Actions } from "react-native-router-flux";
import {connect} from 'react-redux';
import {CardSection} from "../Components/";
import CounterAction from '../Store/Action/Counter';

function mapStateToProps(state) {
    return {
        newsRequest: state.newsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getNews: (data) => dispatch(CounterAction.getNews(data))
    };
}

class Modals extends Component {
    constructor(props) {
        super(props)
        this.state = { shift: "wirtschafts-woche" }

    }
    render() {
        return (
            <View style={styles.container}>

                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={true}
                    onRequestClose={() => { Actions.pop() }}
                >
                    <View style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.heading}> SOURCES </Text>
                            <CardSection>
                                <Picker
                                    style={{ flex: 1 }}
                                    selectedValue={this.props.newsRequest.source}
                                    onValueChange={value => {
                                        return (
                                            this.props.getNews(value),
                                            Actions.pop()
                                        )
                                    }}
                                >
                                    <Picker.Item label="Wirtschafts Woche" value="wirtschafts-woche" />
                                    <Picker.Item label="Time" value="time" />
                                    <Picker.Item label="Time" value="time" />
                                    <Picker.Item label="BBC Sport" value="bbc-sport" />
                                    <Picker.Item label="BBC News" value="bbc-news" />
                                    <Picker.Item label="Daily Mail" value="daily-mail" />
                                </Picker>
                            </CardSection>
                        </View>
                       
                    </View>
                </Modal>



            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold"
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(Modals)
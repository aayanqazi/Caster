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
import CounterAction from '../Store/Action/Actions';

function mapStateToProps(state) {
    return {
        newsRequest: state.newsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getNews: (data) => dispatch(CounterAction.getNewsFromSource(data))
    };
}

class RightModals extends Component {
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
                            <Text style={styles.heading}> Catagories </Text>
                            <CardSection>
                                <Picker
                                    style={{ flex: 1 }}
                                    selectedValue=""
                                    onValueChange={value => {
                                        return (
                                            this.props.getNews(value),
                                            Actions.pop()
                                        )
                                    }}
                                >
                                <Picker.Item value='' label='Select Catagories' />
                                    <Picker.Item label="Buisness" value="business" />
                                    <Picker.Item label="Entertainment" value="entertainment" />
                                    <Picker.Item label="Gaming" value="gaming" />
                                    <Picker.Item label="General" value="general" />
                                    <Picker.Item label="Music" value="music" />
                                    <Picker.Item label="Politics" value="politics" />
                                     <Picker.Item label="Science And Nature" value="science-and-nature" />
                                    <Picker.Item label="Sports" value="sport" />
                                    <Picker.Item label="Technology" value="technology" />
                                    
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

export default connect(mapStateToProps,mapDispatchToProps)(RightModals)
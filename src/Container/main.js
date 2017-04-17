import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import {Constants} from 'expo'
import Store from '../Store/index'
import {connect} from 'react-redux';
import NewsList from "./NewsList"
import {Spinners} from "../Components/"
import CounterAction from '../Store/Action/Counter'

function mapStateToProps(state) {
    return {
        incCounter : state.incrementCounter.incrementState,
        newsRequest: state.newsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getNews: (data) => dispatch(CounterAction.getNews(data))
    };
}

class App extends React.Component {
  componentWillMount(){
    this.props.getNews(this.props.newsRequest.source)
  }
  render() {
    return (
        <View>
          {this.props.newsRequest.isProcessing?<Spinners />:<NewsList />}
          </View>
        
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
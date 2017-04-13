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
import {Header,Card,CardSection,Button,Home} from '../Components/';
import CounterAction from '../Store/Action/Counter'

function mapStateToProps(state) {
    return {
        incCounter : state.incrementCounter.incrementState,
        newsRequest: state.newsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(CounterAction.increment()),
        decrement: () => dispatch(CounterAction.decrement()),
        getNews: (data) => dispatch(CounterAction.getNews(data))
    };
}

class App extends React.Component {
  componentWillMount(){
    this.props.getNews("techcrunch")
  }
  render() {
    console.log(this.props)
    return (
      <View style={{ flex:1}}>
        <Home data={this.props.newsRequest} />
        
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
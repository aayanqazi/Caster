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
import newsAction from '../Store/Action/Actions'

function mapStateToProps(state) {
    return {
        newsRequest: state.newsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getNews: (data) => dispatch(newsAction.getNews(data)),
        Cancell: () => dispatch(newsAction.cancelledRequest())
    };
}

class App extends React.Component {
  componentWillMount(){
    this.props.getNews(this.props.newsRequest.source,this.props.newsRequest.catagories)
  }
  render() {
    return (
        <View>
          {this.props.newsRequest.isProcessing?<Spinners cancel={this.props.Cancell}/>:<NewsList />}
          </View>
        
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
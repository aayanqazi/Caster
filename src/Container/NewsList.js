import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  ScrollView
} from 'react-native';
import {Constants} from 'expo'
import Store from '../Store/index'
import {connect} from 'react-redux';
import {Header,Card,CardSection,Button,Home, Spinners,NewsDetail} from '../Components/';
import CounterAction from '../Store/Action/Actions'

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

class NewsList extends React.Component {
  renderNews() {
      return this.props.newsRequest.isError?<Text>ERROR!!!!</Text>:this.props.newsRequest.news.articles.map(arr => <NewsDetail key={arr.title} section={true} data={arr}/>)
  }
  renderSource(){
      return this.props.newsRequest.isError?<Text>ERROR!!!!</Text>:this.props.newsRequest.news.sources.map(arr => <NewsDetail key={arr.name} section={false} data={arr}/>)
  }
  render() {
      console.log(this.props.newsRequest)
    return (
        <ScrollView>
            {this.props.newsRequest.catagories?this.renderSource():this.renderNews()}
            </ScrollView>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsList);
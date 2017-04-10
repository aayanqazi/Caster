import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import {LoginForm} from "./Components";

const RouterComponent  = () => {
    return (
        <Router sceneStyle={{paddingTop:60}}>
            <Scene key="login" component ={LoginForm} title="Please Login" />
            </Router>
    )
};

export default RouterComponent;
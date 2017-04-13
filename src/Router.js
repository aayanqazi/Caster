import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import {Home,Spinner} from "./Components/";
import Main from './Container/main';
import {
    Constants
} from 'expo';

const RouterComponent  = () => {
    return (
        <Router>
            <Scene key="root" titleStyle={{paddingTop:10}} >
            <Scene key="Home" sceneStyle={{paddingTop:60}} component ={Spinner} title="News Caster" initial={true}/>
            </Scene>
            </Router>
    )
};

export default RouterComponent;
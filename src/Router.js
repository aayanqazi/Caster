import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Home, Spinner } from './Components/';
import Main from './Container/main';
import {
    Constants
} from 'expo';

const RouterComponent = () => (
        <Router>
            <Scene key="Home" sceneStyle={{ paddingTop:60 }} component ={Main} title="News Caster" initial={true}/>
            </Router>
    );

export default RouterComponent;

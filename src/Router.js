import React from 'react';
import {Navigator} from 'react-native';
import { Scene, Router, Actions,Modal } from 'react-native-router-flux';
import { Home } from './Components/';
import Modals from "./Container/Modal"
import Main from './Container/main';
import {
    Constants
} from 'expo';

const RouterComponent = () => (
        <Router>
            <Scene key="modal" component={Modal}>
                <Scene key="root">
            <Scene key="Home" sceneStyle={{ paddingTop:50 }}  leftTitle="Source" rightTitle="Catagories" onLeft={()=>Actions.Modalss()} onRight={()=>console.log("Right Clicked")} leftButtonStyle={{position:'relative',paddingTop:15}} component ={Main} title="News Caster" initial />
            </Scene>
             <Scene key="Modalss" component={Modals} />
            
            </Scene>
             
            </Router>
    );

export default RouterComponent;

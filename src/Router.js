import React from 'react';
import {Navigator} from 'react-native';
import { Scene, Router, Actions,Modal } from 'react-native-router-flux';
import { Home } from './Components/';
import Modals from "./Container/Modal"
import RightModal from "./Container/RightModal"
import Main from './Container/main';
import {
    Constants
} from 'expo';

const RouterComponent = () => (
        <Router>
            <Scene key="modal" component={Modal}>
                <Scene key="root">
            <Scene key="Home" sceneStyle={{ paddingTop:60 }} leftTitle="Source" rightTitle="Catagories" onLeft={()=>Actions.Modalss()} onRight={()=>Actions.Right()}  navigationBarStyle={{borderBottomColor:"blue",height:50,borderBottomWidth:3,marginTop:Constants.statusBarHeight-10}} component ={Main} title="News Caster" initial />
            </Scene>
             <Scene key="Modalss" component={Modals} />
             <Scene key="Right" component={RightModal} />
            
            </Scene>
             
            </Router>
    );

export default RouterComponent;

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {AnimatedRoute} from 'react-router-transition'
import history from './components/browserHistory/browserHistory';

import './static/css/bootstrap.min.css'


// Components
import Header from './components/headerComponents/header';
import GetAllPlayers from './components/playerComponents/getAllPlayers';
import SendPlayer from './components/playerComponents/SendPlayer';
import playerDetails from "./components/playerComponents/playerDetails";

class Player extends Component {

    render(){
       return(
          <Router history = {history}>
           <div class = "App">
               <Header/>

                   <div class = "container sss">
               <AnimatedRoute exact path='/register' component = {SendPlayer}
                              atEnter={{ offset: 100 }}
                              atLeave={{ offset: -100 }}
                              atActive={{ offset: 0 }}
                              runOnMount={true}
                              mapStyles={(styles) => ({
                                  transform: `translateX(${styles.offset}%)`,
                              })}/>
               <AnimatedRoute path = "/players/:idPlayer" component = {playerDetails}
                      atEnter={{ offset: 100 }}
                      atLeave={{ offset: -100 }}
                      atActive={{ offset: 0 }}
                      runOnMount={true}
                      mapStyles={(styles) => ({
                          transform: `translateX(${styles.offset}%)`,
                      })}/>
               <AnimatedRoute exact path='/players' component = {GetAllPlayers}
                      atEnter={{ offset: 100 }}
                      atLeave={{ offset: -100 }}
                      runOnMount={true}
                      atActive={{ offset: 0 }}
                      mapStyles={(styles) => ({
                          transform: `translateX(${styles.offset}%)`,
                      })}/>
               </div>
           </div>
          </Router>
       );
   }
}
export default Player;

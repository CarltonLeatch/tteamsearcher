import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import history from './components/browserHistory/browserHistory';

// includes
//import './App.css';

import './static/css/bootstrap.min.css'


// Components
import Header from './components/headerComponents/header';
import GetAllPlayers from './components/playerComponents/getAllPlayers';
import SendPlayer from './components/playerComponents/SendPlayer';
import playerDetails from "./components/playerComponents/playerDetails";
import sendMessage from "./components/messageComponents/sendMessage";
import saveGame from "./components/gameComponents/saveGame";

class Player extends Component {



    render(){
       return(
          <Router history = {history}>
           <div class = "App">
               <Header/>
               <Route exact path='/' component = {SendPlayer}/>
               <Route to path='/Addons' component = {saveGame} />
               <Route path = "/players/:idPlayer" component = {playerDetails}/>
               <Route to path = '/players/:idPlayer' component = {sendMessage}/>
               <Route exact path='/players' component = {GetAllPlayers}/>

           </div>
          </Router>
       );
   }
}





export default Player;

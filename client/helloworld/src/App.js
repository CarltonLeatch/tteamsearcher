import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// includes
import './App.css';
import './static/css/bootstrap.min.css';
// Components
import Header from './components/headerComponents/header';
import GetAllPlayers from './components/playerComponents/getAllPlayers';
import SendPlayer from './components/playerComponents/SendPlayer';

class Player extends Component {

    render(){
       return(
          <Router>
           <div class = "App">
               <Header/>
               <Route exact path='/' component = {SendPlayer}/>

               <Route exact path='/getAll' component = {GetAllPlayers}/>

           </div>
          </Router>
       );
   }
}





export default Player;

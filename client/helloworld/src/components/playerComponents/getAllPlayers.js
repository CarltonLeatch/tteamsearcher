import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import playerDetails from "./playerDetails";


class getAllPlayers extends Component {



    constructor(){
        super();
        this.state = {
            products : []
        };

    }

    componentDidMount() {

        fetch('http://localhost:8080/api/players')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            })
            .catch(error=>{
                console.log(error)
            });

            this.interval = setInterval(() => {
                fetch('http://localhost:8080/api/players')
                    .then(res => res.json())
                    .then(res => {
                        this.setState({
                            products: res
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }, 10000);

        }

    render(){
        return(
            <div class = "GameContainer">
                <br/><br/><br/><br/><br/>
                <h3>Player List</h3>
                Product filter <input type = "text" class = "filter" placeholder="Search" ref = "filter" onChange={this.search}/>
                <br/><br/>
                <table class = "table">
                    <thead>
                    <tr>
                        <th>ID(Clickable)</th>
                        <th scope = "col">username</th>
                        <th>password</th>

                    </tr>
                    </thead>
                    <tbody>

                    {this.state.products.map(function(p){
                        return(

                            <tr>

                                <td class = "flex-row">{p.idPlayer}</td>
                                <td>{p.username}<br/>{p.email}</td>
                                <td>{p.password}</td>
                                <td><Link class = "link" to ={'/players/' + p.idPlayer}>Wyświetl szczegóły</Link></td>
                            </tr>

                        )

                    })}

                    </tbody>
                </table>
            </div>

        );
    }
}



export default getAllPlayers;
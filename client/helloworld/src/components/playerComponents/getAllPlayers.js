import React, { Component } from 'react';



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
                <br/>
                <h3>Player List</h3>
                <br/>
                Product filter <input type = "text" class = "filter" placeholder="Search" ref = "filter" onChange={this.search}/>
                <table class = "table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th scope = "col">username</th>
                        <th>password</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map(function(p){
                        return(
                            <tr>
                                <td>{p.idPlayer}</td>
                                <td>{p.username}</td>
                                <td>{p.password}</td>
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
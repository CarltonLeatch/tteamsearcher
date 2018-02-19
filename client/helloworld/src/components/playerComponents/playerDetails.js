import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class playerDetails extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            messages: [],
            games : []
        };

    }

    componentDidMount() {

        // console.log(this.props.params.idPlayer);

        fetch('http://localhost:8080/api' + this.props.location.pathname)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res,
                    messages: res.messages,
                    games: res.games
                });
            })
            .catch(error => {
                console.log(error)
            });


    }

    render() {
        let products = this.state.products;
        let messages = this.state.messages;
        let games = this.state.games;
        //alert(messages);
        // let messages = this.state.products.messages;
        return (


            <div class="container-fluid">
                <br/>
                <h3>Player List</h3>
                <br/>


                <table class="table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th scope="col">username</th>
                        <th>password</th>

                    </tr>
                    </thead>
                    <tbody>
                    <td>
                        {products.idPlayer}
                    </td>
                    <td>
                        {products.username}
                    </td>
                    <td>
                        {products.password}
                    </td>
                    </tbody>
                </table>
                <div class = "row">
                <div class="col-sm-6">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Messages</th>
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.messages.map(function (m) {
                                return (
                                    <tr>
                                        <td class="col-sm-1">{m.message}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div class = "col-sm-6">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Games</th>
                                <th>Acronim</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.games.map(function (g) {
                            return (
                            <tr>
                            <td>{g.name}</td>
                                <td>{g.acronim}</td>
                            </tr>
                            )
                            })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default playerDetails;
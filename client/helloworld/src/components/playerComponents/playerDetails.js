import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import SendMessage from "./SendMessage";
import SaveTeam from "./SaveTeam"

class playerDetails extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            comments: [],
            teams: []
        };

    }

    componentDidMount() {

        // console.log(this.props.params.idPlayer);

        fetch('http://localhost:8080/api' + this.props.location.pathname)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res,
                    comments: res.comments,
                    teams: res.teams
                });
            })
            .catch(error => {
                console.log(error)
            });


    }

    render() {
        let products = this.state.products;
        return (


            <div class="container-fluid">
                <br/><br/><br/><br/>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="well well-sm">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4">
                                        AVATAR
                                    </div>
                                    <div class="col-sm-6 col-md-8">
                                        <h4>
                                            {products.username}</h4>
                                        {/*<small><cite title="San Francisco, USA">San Francisco, USA <i class="glyphicon glyphicon-map-marker">*/}
                                        {/*</i></cite></small>*/}
                                        <p>
                                            <i class="fa fa-envelope"></i> {products.email}
                                            <br />
                                            <br />
                                            {/*<i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>*/}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Comments</th>
                                </tr>
                                </thead>
                                <tbody>

                                {this.state.comments.map(function (m) {
                                    return (
                                        <tr>
                                            <td class="col-sm-1">{m.message}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            <SendMessage sendPlayerId={products.idPlayer}/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Teams</th>
                                    <th>Shortscut</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.teams.map(function (g) {
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
                        <SaveTeam sendPlayerId={products.idPlayer}/>
                    </div>
                </div>


            </div>
        );
    }
}

export default playerDetails;
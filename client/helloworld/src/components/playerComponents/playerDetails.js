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
            teams: [],
            lolAccount: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api' + this.props.location.pathname)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res,
                    comments: res.comments,
                    teams: res.teams,
                    lolAccount : res.lolAccount
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        let products = this.state.products;
        let lolAccount = this.state.lolAccount;
        let lolAccountRender;
        if(lolAccount){
            lolAccountRender = (
                <div class="col-sm-2 col-md-4">
                    <blockquote>
                        <p>{lolAccount.username} <small>{lolAccount.level}</small> </p>
                    </blockquote>
                    <p>  {lolAccount.division}
                        <br/>{lolAccount.position}
                        </p>
                </div>
            )
        }
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
                                        <p>
                                            <i class="fa fa-envelope"></i> {products.email}
                                            <br />
                                            {lolAccountRender}
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
                        </div>
                        <SendMessage sendPlayerId={products.idPlayer}/>
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
                        <SaveTeam sendPlayerId={products.idPlayer} />
                    </div>
                </div>
            </div>
        );
    }
}

export default playerDetails;
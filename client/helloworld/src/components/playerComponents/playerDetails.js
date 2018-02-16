import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class playerDetails extends Component{

    constructor(){
        super();
        this.state = {
            products : []
        };

    }

    componentDidMount() {

       // console.log(this.props.params.idPlayer);

        fetch('http://localhost:8080/api' + this.props.location.pathname)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            })
            .catch(error=>{
                console.log(error)
            });


    }

    render(){
        let products = this.state.products;
        return(



            <div class = "GameContainer">
                <br/>
                <h3>Player List</h3>
                <br/>

                <table class = "table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th scope = "col">username</th>
                        <th>password</th>

                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {Object.keys(products).map(function(idPlayer){
                        return(


                                <td class = "link">{products[idPlayer]}</td>


                        )

                    })}
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}
export default playerDetails;
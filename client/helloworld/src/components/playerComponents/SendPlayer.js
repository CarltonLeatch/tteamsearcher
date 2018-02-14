import React, { Component } from 'react';


class SendPlayer extends Component {

    post(){
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var email = this.refs.email.value;
        fetch('http://localhost:8080/api/players',{
            method : 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            this.componentDidMount();
            return res;
        }).catch(err=>err);


    }


    render(){
        return(
            <div>
            <div class = "AddPlayerContainer">
                <br/>
                <div class="form-group">
                    <label class = 'form-control-label col-sm-2' >username: </label> <div class = 'col-sm-10'> <input type = "text" ref = "username"/> </div>
                    <label class = 'form-control-label col-sm-2' >password </label><div class = 'col-sm-10'><input type = "text" ref = "password"/></div>
                    <label class = 'form-control-label col-sm-2' >email </label> <div class = 'col-sm-10'><input type = "text" ref = "email"/> </div>

                    <div class = 'col-sm-10'><input class = "btn-danger" type = "button" value = "Search" onClick={this.post.bind(this)} /></div>
                </div>
            </div>
            </div>        );
    }
}

export default SendPlayer;




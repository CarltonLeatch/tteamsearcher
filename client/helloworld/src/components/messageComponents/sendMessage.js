import React, { Component } from 'react';


class sendMessage extends Component {

    post(){
        var id = this.refs.id.value;
        var message = this.refs.message.value;
        console.log(message);
        fetch('http://localhost:8080/api/message/'+id+"/add",{
            method : 'POST',
            body: JSON.stringify({
                message: message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            return res;
        }).catch(err=>console.log(err));



    }


    render(){
        return(
            <div class = "container">
                <div class="form-group">
                    <label class = 'form-control-label col-sm-2' >message: </label> <div class = 'col-sm-10'> <input type = "text" ref = "message"/> </div>
                    <label class = 'form-control-label col-sm-2' >id: </label> <div class = 'col-sm-10'> <input type = "text" ref = "id"/>

                    <br/>
                    <div class = 'col-sm-10'><input class = "btn-danger" type = "button" value = "Dodaj" onClick={this.post.bind(this)} /></div>
                </div>
            </div>
            </div>
        );
    }
}

export default sendMessage;




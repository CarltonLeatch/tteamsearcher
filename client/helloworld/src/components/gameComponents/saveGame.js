import React, { Component } from 'react';


class saveGame extends Component {

    post(){
        var id = this.refs.id.value;
        var name = this.refs.name.value;
        var acronim = this.refs.acronim.value;
        alert(acronim);
        fetch('http://localhost:8080/api/games/'+id+"/add",{
            method : 'POST',
            body: JSON.stringify({
                name: name,
                acronim: acronim
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

            <div class = "sendMessageContainer">
                <br/>
                <div class="form-group">
                    <label class = 'form-control-label col-sm-2' >name: </label> <div class = 'col-sm-10'> <input type = "text" ref = "name"/><br/>
                    <label class = 'form-control-label col-sm-2' >acronim: </label> <div class = 'col-sm-10'> <input type = "text" ref = "acronim"/><br/>
                    <label class = 'form-control-label col-sm-2' >id: </label> <div class = 'col-sm-10'> <input type = "text" ref = "id"/>
                        </div>
                    <br/>
                    <div class = 'col-sm-10'><input class = "btn-danger" type = "button" value = "Dodaj" onClick={this.post.bind(this)} /></div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default saveGame;



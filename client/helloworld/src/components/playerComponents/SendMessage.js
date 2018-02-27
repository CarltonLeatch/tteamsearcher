import React, {Component} from 'react';

import playerDetails from './playerDetails';

class SendMessage extends Component {

    constructor(props) {
        super(props);
    }


    post() {
        var id = this.props.sendPlayerId;
        var message = this.refs.message.value;
        fetch('http://localhost:8080/api/message/' + id + "/add", {
            method: 'POST',
            body: JSON.stringify({
                message: message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));


    }


    render() {
        return(
        <div class="container">
            <div class="form-group">
                <label class='form-control-label col-sm-2'>message: </label>
                <div class='col-sm-10'><input type="text" ref="message"/></div>
                {/*<hidden type="text" ref="id" value={this.props.sendPlayerId}/>*/}

                <div class='col-sm-10'><input class="btn-danger" type="button" value="Dodaj"
                                              onClick={this.post.bind(this)}/></div>
            </div>
        </div>
    );
}
}

export default SendMessage;

import React, {Component} from 'react';

import playerDetails from './playerDetails';

class SendMessage extends Component {

    constructor(props) {
        super(props);
    }


    post() {
        var id = this.props.sendPlayerId;
        var message = this.refs.message.value;
        this.onPostHandler(message,id);
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

    onPostHandler(message) {
        this.props.onPostHandler(message);            
    }


    render() {
        return(
            <form role="form" class="col-md-9 go-right">
                <div class="form-group">
                    <input placeholder="message" id="name" name="name" ref = "message" type="text" class="form-control" required />
                    <label for="name">message</label>
                </div>
                <button type="button" class="btn btn-labeled btn-success" onClick={this.post.bind(this)}>
                    <span class="btn-label"></span>Comment
                </button>
            </form>
    );
}
}

export default SendMessage;

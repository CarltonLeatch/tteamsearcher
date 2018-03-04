import React, {Component} from 'react';


class SendPlayer extends Component {

    post() {
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var email = this.refs.email.value;
        var passwordconf = this.refs.passwordconf.value;
        if (password == passwordconf)
            fetch('http://localhost:8080/api/players', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                this.componentDidMount();
                return res;
            }).catch(err => err);


    }


    render() {
        return (
            <div class="container"><br/><br/><br/><br/><br/>
                <div class="row">
                    <form role="form" class="col-md-9 go-right">
                        <h2>Register form.</h2>
                        <p>Trust in our product</p>
                        <div class="form-group">
                            <input placeholder="username" id="name" name="name" ref="username" type="text"
                                   class="form-control" required/>
                            <label for="name">Username</label>
                        </div>
                        <div class="form-group">
                            <input placeholder="password" id="phone" name="phone" ref="password" type="password"
                                   class="form-control" required/>
                            <label for="phone">Password</label>
                        </div>
                        <div class="form-group">
                            <input placeholder="Confirm Password" id="phone" name="phone" ref="passwordconf" type="password"
                                   class="form-control" required/>
                            <label for="phone">Confirm Password</label>
                        </div>
                        <div class="form-group">
                            <input placeholder="email" id="message" name="phone" ref="email" type ="email" class="form-control"
                                   required/>
                            <label for="message">email</label>
                        </div>

                        <button type="button" class="btn btn-labeled btn-success" onClick={this.post.bind(this)}>
                            <span class="btn-label"></span>Register
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default SendPlayer;




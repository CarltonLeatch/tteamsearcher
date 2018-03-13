import React, {Component} from 'react';


class LoginPlayer extends Component {


    

    post() {
        var username = this.refs.username.value;
        var password = this.refs.password.value;
 
       
            fetch('http://localhost:8080/api/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {     
              //  alert(res.ok); Return the status of boolean in back-end User login status(True/false)
                this.componentDidMount();
                return res;
            }).catch(err => err);


    }


    render() {
        return (
            <div class="container">
                <div class="row">
                    <form role="form" class="col-md-9 go-right">
                        <h2>Login into</h2>
                        <p>your own account !</p>
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
                        <button type="button" class="btn btn-labeled btn-success" onClick={this.post.bind(this)}>
                            <span class="btn-label"></span>Login
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPlayer;




import React, { Component } from 'react';
import './App.css';
import './static/css/bootstrap.min.css';

class Player extends Component {
   constructor(){
       super();
       this.state = {
           products : []
       };
   }

   componentDidMount() {
        fetch('http://localhost:8080/api/players')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            })
            .catch(error=>{
                console.log(error)
            })
   }

     search(){
       var search = this.refs.filter.value;
       }


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
           <div class = "container">
               <br/>
               username <input type = "text" ref = "username"/>
               password <input type = "text" ref = "password"/>
               email <input type = "text" ref = "email"/>
               <input class = "btn-danger" type = "button" value = "Search" onClick={this.post.bind(this)} />
               <h3>Player List</h3>
               <br/>
               Product filter <input type = "text" class = "filter" placeholder="Search" ref = "filter" onChange={this.search}/>
               <table class = "table">
                   <thead>
                   <tr>
                       <th>id</th>
                       <th scope = "col">username</th>
                       <th>password</th>

                   </tr>
                   </thead>
                   <tbody>
                   {this.state.products.map(function(p){
                       return(
                           <tr>
                               <td>{p.idPlayer}</td>
                               <td>{p.username}</td>
                               <td>{p.password}</td>
                           </tr>
                       )
                   })}
                   </tbody>
               </table>
           </div>

       );
   }
}





export default Player;

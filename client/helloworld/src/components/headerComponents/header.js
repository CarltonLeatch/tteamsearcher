import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <div class="fixed-top">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"></link>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                <header class="topbar">
                    <div class="container">
                        <div class="row">

                            <div class="col-sm-12">
                                <ul class="social-network">
                                    <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>
                                    <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </header>
                <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                    <div class="container">
                        <a class="navbar-brand" href="/" styles="text-transform: uppercase;"> Team Searcher.xD</a>
                        {/*<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">*/}
                            {/*<span class="navbar-toggler-icon"></span>*/}
                        {/*</button>*/}

                        <div class="collapse navbar-collapse" id="navbarResponsive">

                            <ul class="navbar-nav ml-auto">

                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="/players">Show all players</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="/Addons">Send Message</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sea food</a>
                                </li>

                            </ul>
                        </div>


                    </div>
                </nav>
            </div>     );
    }
}

export default Header;
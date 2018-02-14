import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <header>
                <div className="logo">
                Logo
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/getAll">Get All</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
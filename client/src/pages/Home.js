import React, { Component } from 'react';
import Style from "./Style.module.css"
import { Link } from 'react-router-dom'


 class Home extends Component {

    render() {
        return (
              
           <div className={Style.heroimage}>
            <div className={Style.herotext}>
                <h1> Welcome to the LUNDAPP</h1>
                <p>Getting your lundary done has never been easier</p>
                </div>
                <Link to="/order">
                <button className={Style.herobutton} href="/order">Get Started</button>
                </Link>
            </div>

    
        
     
        )
    }
}

export default Home

import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Header from './Header';

class Landing extends React.Component {
    
    render() {
        return(
            <div className="Container">
                <main className="landing-main">
                    <div className="landing-div">    
                        <h2 className="landing-h2">Welcome to The Social Reloader!</h2>
                        <p className="landing-p">All Loads are user submitted so remember to always start with the minimum load from your respected reloading manual!  </p>
                        <Link to="/home" className="landing-start">Start!</Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default Landing;
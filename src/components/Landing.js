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
                        <p className="landing-p">To get started just press start and you will be brought to the home page. At the home page you can browse through random data or pick one of the catagories of firearms on header. To save particular just click on the reload name and scroll and then click the save button on the bottom of the page then to see your saved reload data just click saved on the header bar. Searching is easily done by typing the name of the reload you want to search on the header and then click the magnifying glass.  </p>
                        <Link to="/home" className="landing-start">Start!</Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default Landing;
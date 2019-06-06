import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Header from './Header';
import UserConstRiflePistol from './UserContRiflePistol';
const User = () => {
    return(
        <body>
            <Header />
            <main>
                <section className="user-sec">
                    <div className="user-info">
                        <img src="http://maestroselectronics.com/wp-content/uploads/bfi_thumb/blank-user-355ba8nijgtrgca9vdzuv4.jpg" alt="user-image" className="user-image" />
                        <div className="user-infop">
                            <p  className="user-username">Username: PlaceHolder</p>
                            <p className="user-postcount">Number of Post Made: 50</p>
                        </div>
                    </div>
                    <div className="user-numbers">
                        <p className="user-followcount">Followers: 100</p>
                        <p className="user-followcount">Following: 100</p>
                        <p className="user-followcount">Post Saved By Other Users: 100</p>
                    </div>
                    <div className="user-cont">
                        <UserConstRiflePistol />
                        <UserConstRiflePistol />
                        <UserConstRiflePistol />
                        <UserConstRiflePistol />
                    </div>
                </section>
            </main>
        </body>
    )
}

export default User
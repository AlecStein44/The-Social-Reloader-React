import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const NewPost = () => {
    return(
        <div className="post-nav">
            <h3>New Post: </h3>
            <Link to="/riflepost" className="choice">Rifle</Link>
            <Link to="/pistolpost" className="choice">Pistol</Link>
            <Link to="/shotgunpost" className="choice">Shotgun</Link>
        </div>
    )
}

export default NewPost;
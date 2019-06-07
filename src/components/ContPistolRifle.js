import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const ContPistolRifle = (props) => {
    return(
        <div className="rps-div">
            <Link to={{pathname: "/data", search: `?find=${props.page}`}} className="rps-h2">Name: {props.name}</Link>
            <div className="rps-main">
                <img src={`./uploads/${props.img}`} className="rps-img" width="300px" height="250px" />
                <div className="rps-info">
                <p>Caliber: {props.cal}</p>
                <p>Bullet: {props.bullet}</p>
                <p>Primer: {props.primer}</p>
                <p>Case: {props.brandcase}</p>
                <p>Price Per Round: {props.price}</p>
                <p>Fps: {props.fps}</p>
                <p>Minimum Group: {props.min} .In</p>
                <p>Average Group: {props.avg} .In</p>
                <p>Maximum Group: {props.max} .In</p>
                </div>
            </div>
        </div>
    )
}

export default ContPistolRifle;

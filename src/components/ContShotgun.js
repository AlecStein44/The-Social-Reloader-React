import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const ConstShotgun = (props) => {
    return(
        <div className="rps-div">
            <Link to={{pathname: "/data", search: `?find=${props.page}`}} className="rps-h2">Name: {props.name}</Link>
            <div className="rps-main">
            <img src={`../uploads/${props.img}`} className="rps-img" width="300px" height="250px" />
                <div className="rps-info">
                <p>Gauge: {props.gauge}</p>
                <p>Shot: {props.shot}</p>
                <p>Primer: {props.primer}</p>
                <p>Shell: {props.shell}</p>
                <p>Price Per Round: {props.price}</p>
                <p>Fps: {props.fps}</p>
                <p>Minimum Pattern: {props.min} .In</p>
                <p>Average Pattern: {props.avg} .In</p>
                <p>Maximum Pattern: {props.max} .In</p>
                </div>
            </div>
        </div>
    )
}

export default ConstShotgun;
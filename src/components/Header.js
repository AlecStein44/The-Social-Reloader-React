import React from 'react';
import {NavLink, Redirect, Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        return  window.location.href = `/search?search=${this.state.inputValue}`
    }
    render() {
        return(
            <header>
                <nav>
                    <NavLink to="/home" className="navA">Home</NavLink>
                    <NavLink to="/rifle" className="navA">Rifle</NavLink>
                    <NavLink to="/pistol" className="navA">Pistol</NavLink>
                    <NavLink to="/shotgun" className="navA">Shotgun</NavLink>
                </nav>
                <Link to="/home" className="webname">The Social Reloader</Link>
                <form className="searchform" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Search For Reloads" className="search" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                            <button type="submit" ><i class="fa fa-search"></i></button>
                </form>
                <Link to="/user" className="header-a">User</Link>
                <Link to="/saved" className="header-a">Saved</Link>
            </header>
        )
    }
}

export default Header;
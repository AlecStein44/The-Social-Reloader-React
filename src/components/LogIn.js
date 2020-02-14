import React from 'react';



class LogIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            dataStorage: null,
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            username: e.target.value,
            password: e.target.value
        })
    }
//window.location.href = `/search?search=${this.state.inputValue}
    handleSubmit(e) {
        e.preventDefault()
        fetch(`https://the-social-reloader-server.herokuapp.com/login?username=${this.state.username}&password=${this.state.password}`)
        .then(response => response.json())
        .then(data => 
          this.handleData(data)
        )
    }

    handleData(data) {
        this.setState({
            dataStorage: data
        })
        if(this.state.dataStorage.length !== 0) {
            return(
                this.setState({
                    success: true
                }),
                document.getElementById("log-matcherror-id").classList.remove('log-matcherror'),
                document.getElementById("log-matcherror-id").classList.add('log-matcherror-none')
            )
        } else {
            return (
                document.getElementById("log-matcherror-id").classList.add('log-matcherror'),
                document.getElementById("log-matcherror-id").classList.remove('log-matcherror-none')
            )
        }
    }

    render() {
        return(
            <form className="Log-Form" onSubmit={this.handleSubmit} ref={(form) => { this.form = form }}>
                <label className="log-matcherror-none" id="log-matcherror-id">Your Username or Password is Incorrect</label>
                <label className="Log-Label">Username</label>
                <input type="text" className="Log-Input" onChange={ e => this.setState({ username : e.target.value }) } required/>
                <label className="Log-Label">Password</label>
                <input type="password" className="Log-Input" onChange={ e => this.setState({ password : e.target.value }) } required/>
                {this.state.success ? <p className="sign-submitted">Success!</p> : <input type="submit" className="submit" />}
            </form>
        )
    }
}

export default LogIn;
import React from 'react';



class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            submitted: false,
            userdata: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch(`https://the-social-reloader-server.herokuapp.com/escheck`)
      .then(response => response.json())
      .then(data => 
        this.setState({
            userdata: data
        })
      )
    }

    handleChange(e) {
        this.setState({
            email: e.target.value,
            username: e.target.value,
            password: e.target.value,
            
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData();
        formData.append('email', this.state.email )
        formData.append('username', this.state.username )
        formData.append('password', this.state.password )
        for (let i = 0; i < this.state.userdata.length; i++) {
            if(this.state.email !== this.state.userdata[i].email || this.state.username !== this.state.userdata[i].username) {
                return fetch(`https://the-social-reloader-server.herokuapp.com/signup`, {  
                    method: 'POST',  
                    body: formData 
                })
                .then(() => this.setState({
                    submitted: true
                }))
                .then(() => window.location.assign("http://localhost:3000/login"))
                .then(() => this.form.reset())
                .catch(function (error) {  
                    console.log('Request failure: ', error);  
                });
            } else {
                return(
                    document.getElementById("log-matcherror-id").classList.add('log-matcherror'),
                    document.getElementById("log-matcherror-id").classList.remove('log-matcherror-none')
                )
            }
        }
    }

    render() {
        return(
            <form className="Log-Form" onSubmit={this.handleSubmit} ref={(form) => { this.form = form }}>
                <label className="log-matcherror-none" id="log-matcherror-id">This Email or Username Already Exist</label>
                <label className="Log-Label">Email</label>
                <input type="text" className="Log-Input" onChange={ e => this.setState({ email : e.target.value }) } required/>
                <label className="Log-Label">Username</label>
                <input type="text" className="Log-Input" onChange={ e => this.setState({ username : e.target.value }) } required/>
                <label className="Log-Label">Password</label>
                <input type="password" className="Log-Input" onChange={ e => this.setState({ password : e.target.value }) } required/>
                {this.state.submitted ? <p className="sign-submitted">Success!</p> : <input type="submit" className="submit" />}
            </form>
        )
    }
}

export default SignUp;
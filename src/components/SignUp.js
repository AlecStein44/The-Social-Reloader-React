import React from 'react';



class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            submitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
        fetch(`https://the-social-reloader-server.herokuapp.com/signup`, {  
            method: 'POST',  
            body: formData 
        })
        .then((data) => {
            if(data.status == 200) {
                console.log(data)
                this.setState({
                    submitted: true
                })
            } else {
                alert('This Email or Username Already Exists')
            }
        })
        /*.then(() => this.setState({
            submitted: true
        }))*/
        //.then(() => window.location.assign("http://localhost:3000/login"))
        .then(() => this.form.reset())
        .catch(function (error) {  
          console.log('Request failure: ', error);  
        });
    }

    render() {
        return(
            <form className="Log-Form" onSubmit={this.handleSubmit} ref={(form) => { this.form = form }}>
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
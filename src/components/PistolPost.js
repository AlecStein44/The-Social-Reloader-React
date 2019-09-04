import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Header from './Header';

class PistolPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            img: null,
            caliber: '',
            bullet: '',
            powder: '',
            primer: '',
            case: '',
            price: 0,
            fps: 0,
            min: 0,
            avg: 0,
            max: 0,
            paragraph: '',
            type: 'pistol',
            ifpost: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.postButton = this.postButton.bind(this)
    }
    //changes state everytime the input changes.
    handleChange(e) {
        this.setState({
            name: e.target.value,
            img: e.target.files[0],
            caliber: e.target.value,
            bullet: e.target.value,
            powder: e.target.value,
            primer: e.target.value,
            case: e.target.value,
            price: e.target.value,
            fps: e.target.value,
            min: e.target.value,
            avg: e.target.value,
            max: e.target.value,
            paragraph: e.target.value
        })
        console.log(this.state.primer)
    }
    //takes all the keys from state and put in a formdata and post to server
    handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData();
        formData.append('name', this.state.name )
        formData.append('img', this.state.img )
        formData.append('caliber', this.state.caliber )
        formData.append('bullet', this.state.bullet )
        formData.append('powder', this.state.powder )
        formData.append('primer', this.state.primer )
        formData.append('case', this.state.case )
        formData.append('price', this.state.price )
        formData.append('fps', this.state.fps )
        formData.append('min', this.state.min )
        formData.append('avg', this.state.avg )
        formData.append('max', this.state.max )
        formData.append('paragraph', this.state.paragraph )
        formData.append('type', this.state.type )
        console.log(formData.entries())
        fetch(`https://the-social-reloader-server.herokuapp.com/pistolpost`, {  
            method: 'POST',  
            body: formData 
        })
        .then(function (data) {  
          console.log('Request success: ', data);  
        })
        .then(() => this.test.reset())   
        .catch(function (error) {  
          console.log('Request failure: ', error);  
        });
    }

    postButton() {
        this.setState({
            ifpost: true
        })
    }
    render() {
        return(
            <section>
                <div className="Container">
                    <main>
                        <h3 className="post-h3">New Pistol Post</h3>
                        <div class="post-div">
                            <form class="post-form" onSubmit={this.handleSubmit} ref={(test) => { this.test = test }}>
                                <input type="file" className="pic" accept="image/*" className="post-input-img post-input" onChange={ e => this.setState({ img : e.target.files[0] }) } required />
                                <label className="reload-className" for="className">Reload Name</label>
                                <input type="text" className="className" class="post-input" onChange={ e => this.setState({ name : e.target.value }) } required />
                                <label className="caliber">Caliber</label>
                                <input type="text" class="post-input" onChange={ e => this.setState({ caliber : e.target.value }) } required />
                                <label className="bullet">Bullet</label>
                                <input type="text" class="post-input" onChange={ e => this.setState({ bullet : e.target.value }) } required />
                                <label className="powder">Powder</label>
                                <input type="text" class="post-input" onChange={ e => this.setState({ powder : e.target.value }) } required />
                                <label className="primer">Primer</label>
                                <input type="text" class="post-input" onChange={ e => this.setState({ primer : e.target.value }) } required />
                                <label className="case">Case</label>
                                <input type="text" class="post-input" onChange={ e => this.setState({ case : e.target.value }) } required />
                                <label className="ppr">Price Per Round</label>
                                <input type="number" class="post-input" step='0.01' onChange={ e => this.setState({ price : e.target.value }) } required />
                                <label className="fps">FPS</label>
                                <input type="number" class="post-input" onChange={ e => this.setState({ fps : e.target.value }) } required />
                                <label className="min">Minimum Group</label>
                                <input type="number" class="post-input" step='0.001' required onChange={ e => this.setState({ min : e.target.value }) } />
                                <label className="avg">Average Group</label>
                                <input type="number" className="post-input" step='0.001' onChange={ e => this.setState({ avg : e.target.value }) } required />
                                <label className="avg">Maximum Group</label>
                                <input type="number" className="post-input" step='0.001' onChange={ e => this.setState({ max : e.target.value }) } required />
                                <label className="para">Your Development Story</label>
                                <textarea rows="8" cols="50" onChange={ e => this.setState({ paragraph : e.target.value }) } required />
                                <input type="submit" onClick={this.postButton} className="submit" value={this.state.ifpost ? 'Post Submitted!' : 'Submit'} />
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        )
    }
}

export default PistolPost;

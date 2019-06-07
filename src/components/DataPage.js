import React, {Component} from 'react';
import Header from './Header';

class DataPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            savedId: "test",
            path: null,
            ifsaved: false
        }
        this.saveButton = this.saveButton.bind(this);
    }

    componentDidMount() {
        let path = window.location.search
        fetch(`https://the-social-reloader-server.herokuapp.com/data${path}`)
      .then(response => response.json())
      .then(data => 
        this.setState({
            results: data[0],
            savedId: data[0].id,
            path: data[0].img
        })
      );
    }

    saveButton() {
        if(localStorage.getItem('item') === null) {
            localStorage.setItem('item', this.state.savedId)
        } else {
            let localStr = localStorage.getItem("item")
            let newstr = `${localStr} ${this.state.savedId}`
            localStorage.setItem("item", newstr)
        }
        this.setState({
            ifsaved: true
        })
    }

    render() {
        console.log(this.state.path)
        let imgsrc = <img src={`../uploads/${this.state.path}`} alt="Data Pic" className="Page-Img" />
        return(
            <section>
                <Header />
                <main className="Page-Main">
                    <section className="Page-Sec">
                        <h2 className="Page-H2">{this.state.results.name}</h2>
                        {console.log(typeof this.state.path)}
                        {imgsrc}
                        <div className="Page-Info-P">
                            <div className="Page-Info">
                                <p>Caliber: {this.state.results.caliber}</p>
                                <p>Bullet: {this.state.results.bullet}</p>
                                <p>Primer: {this.state.results.primer}</p>
                                <p>Case: {this.state.results.brandcase}</p>
                                <p>Price Per Round: {this.state.results.price}</p>
                                <p>Fps: {this.state.results.fps}</p>
                                <p>Minimum Group: {this.state.results.min}</p>
                                <p>Average Group: {this.state.results.avg}</p>
                                <p>Maximum Group: {this.state.results.max}</p>
                            </div>
                            <div className="Page-Div-P">
                                <p className="Page-P">{this.state.results.paragraph}</p>
                            </div>
                        </div>
                        <div className="Page-Div-Save">
                            <button className="Page-Save-Button" onClick={this.saveButton}>{this.state.ifsaved ? 'Saved' : 'Save Data'}</button>
                        </div>
                    </section>
                </main>
            </section>
        )
    }
}

export default DataPage

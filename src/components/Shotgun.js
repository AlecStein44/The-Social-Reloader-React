import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Header from './Header';
import ContShotgun from './ContShotgun';

class Shotgun extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: []
        }
      }
    //gets items from server
    componentDidMount() {
        fetch(`https://the-social-reloader-server.herokuapp.com/shotgun`)
      .then(response => response.json())
      .then(data => 
        this.setState({
            results: data
        })
      );
    }

    render() {
        return(
            <section>
                <div className="Container">
                    <main>
                        <section className="rps-sec">
                            <h2>Shotgun Load Data</h2>
                            {this.state.results.map(data => {
                                return <ContShotgun page={data.id} img={data.img} name={data.name} user={data.user} gauge={data.gauge} shot={data.shot} powder={data.powder} primer={data.primer} shell={data.shell} price={data.price} fps={data.fps} min={data.min} avg={data.avg} max={data.max}  />
                            })}
                        </section>
                    </main>
                </div>
            </section>
        )
    }
}

export default Shotgun;

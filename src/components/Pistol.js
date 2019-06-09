import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Header from './Header';
import ContPistolRifle from './ContPistolRifle';

class Pistol extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: []
        }
      }

    componentDidMount() {
        fetch(`https://the-social-reloader-server.herokuapp.com/pistol`)
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
                    <Header />
                    <main>
                        <section className="rps-sec">
                            <h2>Pistol Load Data</h2>
                            {this.state.results.map(data => {
                                return <ContPistolRifle page={data.id} img={data.img} name={data.name} user={data.user} cal={data.caliber} bullet={data.bullet} powder={data.powder} primer={data.primer} brandcase={data.brandcase} price={data.price} fps={data.fps} min={data.min} avg={data.avg} max={data.max}  />
                            })}
                        </section>
                    </main>
                </div>
            </section>
        )
    }
}

export default Pistol;

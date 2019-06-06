import React from 'react';
import Header from './Header';
import ContPistolRifle from './ContPistolRifle';
import ContShotgun from './ContShotgun';

class Saved extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resultsRifle: [],
            resultsShotgun: [],
            isData: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/saved', {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.json();})
        .then(responseData => {console.log(responseData); return this.handleState(responseData);})
    }

    handleState(data) {
        if(localStorage.getItem('item') !== null) {
            let getItem = localStorage.getItem('item')
            let savedData = getItem.split(" ")
            let finalData = data.filter(data => savedData.find(data2 => data.id == data2))
            let riflePistolArr = []
            let shotgun = []
            finalData.map(data => {
                if(data.gauge === undefined) {
                    riflePistolArr.push(data)
                } else {
                    shotgun.push(data)
                }
            })
            console.log(savedData)
            console.log(data)
            console.log(finalData)
            this.setState({
                resultsRifle: riflePistolArr,
                resultsShotgun: shotgun,
                isData: true
            })
        }
        console.log(this.state)
    }

    render() {
        return(
            <body>
                <Header />
                <main>
                    <h2 className="centerh2">Saved Reloads</h2>
                    <section className="rps-sec">
                      {(this.state.resultsRifle.length !== 0) ? this.state.resultsRifle.map(data => {
                                return <ContPistolRifle page={data.id} img={data.img} name={data.name} user={data.user} cal={data.caliber} bullet={data.bullet} primer={data.primer} brandcase={data.brandcase} price={data.price} fps={data.fps} min={data.min} avg={data.avg} max={data.max}  />
                        }) : console.log('No Rifle or Pistol Found')}
                      {(this.state.resultsShotgun.length !== 0) ? this.state.resultsShotgun.map(data => {
                                return <ContShotgun page={data.id} img={data.img} name={data.name} user={data.user} gauge={data.gauge} shot={data.shot} primer={data.primer} shell={data.shell} price={data.price} fps={data.fps} min={data.min} avg={data.avg} max={data.max}  />
                        }) : console.log('No Shotgun Found')}
                        {this.state.isData ? console.log('Data is Found') : <h2 className="saved-red">No Saved Data Found</h2>}
                    </section>
                </main>
            </body>
        )
    }
}

export default Saved


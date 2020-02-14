import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing'
import Home from './components/Home';
import Rifle from './components/Rifle';
import Pistol from './components/Pistol';
import Shotgun from './components/Shotgun';
import ErrorPage from './components/ErrorPage';
import Saved from './components/Saved';
import RiflePost from './components/RiflePost';
import PistolPost from './components/PistolPost';
import ShotgunPost from './components/ShotgunPost';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import DataPage from './components/DataPage';
import Search from './components/Search';
import User from './components/User';
import './App.css';
/*function App = () => {}*/
class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
              <Header />
              <Switch className="routes">
                  <Route path="/" component={Landing} exact />
                  <Route path="/home" component={Home} />
                  <Route path="/rifle" component={Rifle} />
                  <Route path="/pistol" component={Pistol} />
                  <Route path="/shotgun" component={Shotgun} />
                  <Route path="/saved" component={Saved} />
                  <Route path="/riflepost" component={RiflePost} />
                  <Route path="/pistolpost" component={PistolPost} />
                  <Route path="/shotgunpost" component={ShotgunPost} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={LogIn} />
                  <Route path="/data" component={DataPage} />
                  <Route path="/search" component={Search} />
                  <Route path="/user" component={User} />
                  <Route component={ErrorPage} />
              </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

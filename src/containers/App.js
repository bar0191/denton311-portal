import React, { Component } from 'react';
import '../styles/App.css';
import MainNav from '../components/MainNav';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Reports from './Reports';
import Footer from '../components/Footer';
import Fire from '../utils/fire';
import * as firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    Fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user);
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        // ...
      } else {
        // user is logged out somehow, sign them back in
        Fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(function() {
            // Existing and future Auth states are now persisted in the device
            // local storage.
            // ...
            // New sign-in will be persisted with local persistence.
            console.log('setting persistence, logging in');
            return Fire.auth().signInAnonymously();
          })
          .catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
          });
      }
      // ...
    });
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav open={this.state.isOpen} toggleNav={this.toggleNav}/>
          <Route exact path="/" component={Home} />
          <Route path="/reports" component={Reports} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
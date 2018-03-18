import React, { Component } from 'react';
import '../styles/App.css';
import MainNav from '../components/MainNav';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Reports from './Reports';
import Footer from '../components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
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
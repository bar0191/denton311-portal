import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Collapse, NavLink } from 'reactstrap';

import { Container } from 'reactstrap';
import Logo from '../../images/City-of-Denton-Type-Stacked.svg';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="container">
      <Navbar id="mainNav" fixed="top" color="faded" light expand="lg">
        <NavbarBrand className="brand" href="/">Denton 311</NavbarBrand>
        <NavbarToggler className="toggler" onClick={this.props.toggleNav} />
        <Collapse isOpen={this.props.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/reports">Reports</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}
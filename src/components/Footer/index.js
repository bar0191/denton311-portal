import React from 'react';
import { Container } from 'reactstrap';

export default (props) => (
  <footer>
    <Container>
      <p>&copy; 2018. All Rights Reserved.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="/">Contact</a>
        </li>
        <li className="list-inline-item">
          <a href="/">Support</a>
        </li>
        <li className="list-inline-item">
          <a href="/">FAQ</a>
        </li>
      </ul>
    </Container>
  </footer>
);
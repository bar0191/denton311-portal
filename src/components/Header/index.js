import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default (props) => (
  <header className="main-head">
    <Container className="h-100">
      <Row className="h-100">
        <Col lg="12" className="my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">
              {props.headerTitle}
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
);
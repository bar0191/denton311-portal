import React from 'react';
import '../../styles/device.css';
import mainAppScreen from '../../images/mainAppScreen.png';
import { Container, Row, Col, Button } from 'reactstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <header className="homehead">
          <Container className="h-100">
            <Row className="h-100">
              <Col lg="7" className="my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">
                    <em className="App-title">Denton 311</em> is an initiative made by students at UNT to jump start non-emergency services in the City of Denton. This app is currently in development and seeking users to test it!
                  </h1>
                  <a href="#" className="btn btn-outline btn-xl">Get started now!</a>
                </div>
              </Col>
              <Col lg="5" className="my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        <img src={mainAppScreen} className="img-fluid" alt=""/>
                      </div>
                      <div className="button">

                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
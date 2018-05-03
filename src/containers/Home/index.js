import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/device.css';
import mainAppScreen from '../../images/mainAppScreen.png';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AppleIcon from 'react-icons/lib/fa/apple';
import AndroidIcon from 'react-icons/lib/fa/android';
import QRCode from '../../images/QRCode.png';
import newRequestScreen from '../../images/NewRequest.png';
import ReportListScreen from '../../images/ReportList.png';
import ReportMapScreen from '../../images/ReportMap.png';
import ReportScreen from '../../images/Report.png';
import Slider from 'react-slick';
import GPSSvg from '../../images/gps.svg';
import TimeSvg from '../../images/time.svg';
import CameraSvg from '../../images/photo-camera.svg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleScrollToElement = (e) => {
    e.preventDefault();
    const tesNode = ReactDOM.findDOMNode(this.refs.test);
    window.scrollTo(0, tesNode.offsetTop);
  };

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

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
                  <a href="#" onClick={this.handleScrollToElement} className="btn btn-outline btn-xl">Check it out!</a>
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

        <section ref="test" className="features" id="features">
          <Container style={{width: '100%'}}>
            <div className="section-heading text-center">
              <h2>App Features</h2>
              <hr/>
            </div>
            <Row>
              <Col
                className="block"
                style={{ borderRight: '1px solid rgba(209, 210, 211, 0.3)'}}
                md="4"
              >
                <div>
                  <img src={GPSSvg} style={{width: '100%', height: 95, marginBottom: 25 }} alt=""/>
                  <h2 style={{textAlign: 'center', fontSize: 30}} className="block-titles">GPS/Geocoding</h2>
                  <p style={{textAlign: 'center'}}>You can select your location using Google Maps API.</p>
                </div>
              </Col>
              <Col
                className="block"
                style={{ borderRight: '1px solid rgba(209, 210, 211, 0.3)'}}
                md="4"
              >
                <div>
                  <img src={TimeSvg} style={{width: '100%', height: 95, marginBottom: 25 }} alt=""/>
                  <h2 style={{textAlign: 'center', fontSize: 30}} className="block-titles">Real-Time Data</h2>
                  <p style={{textAlign: 'center'}}>Reports are updated on all devices in real-time.</p>
                </div>
              </Col>
              <Col
                className="block"
                md="4"
                style={{borderBottom: 0}}
              >
                <div>
                  <img src={CameraSvg} style={{width: '100%', height: 95, marginBottom: 25 }} alt=""/>
                  <h2 style={{textAlign: 'center', fontSize: 30}} className="block-titles">Photo/Video Sharing</h2>
                  <p style={{textAlign: 'center'}}>share up to 3 photos/videos.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="screenshots" id="screenshots">
          <Container style={{width: '100%'}}>
            <div className="section-heading text-center">
              <h2>App Screenshots</h2>
              <hr/>
            </div>
            <Slider {...settings}>
              <div className="pic">
                <img className="img-fluid" src={mainAppScreen} />
              </div>
              <div className="pic">
                <img className="img-fluid" src={newRequestScreen} />
              </div>
              <div className="pic">
                <img className="img-fluid" src={ReportMapScreen} />
              </div>
              <div className="pic">
                <img className="img-fluid" src={ReportListScreen} />
              </div>
              <div className="pic">
                <img className="img-fluid" src={ReportScreen} />
              </div>
            </Slider>
          </Container>
        </section>

        <section className="contact" id="contact">
          <Container style={{width: '100%'}}>
            <div className="section-heading text-center">
              <h2>Get In Touch</h2>
              <hr/>
            </div>
            <Form className="contact-form">
              <FormGroup>
                <Label for="contactName" hidden>Name</Label>
                <Input
                  className="input-fields"
                  type="name"
                  name="name"
                  id="contactName"
                  placeholder="Name"
                  bsSize="lg" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="contactEmail" hidden>Email</Label>
                <Input
                  className="input-fields"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  bsSize="lg" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="contactMessage" hidden>Message</Label>
                <Input
                  className="input-message"
                  type="textarea"
                  name="text"
                  placeholder="Message"
                  id="exampleText"
                  bsSize="lg" />
              </FormGroup>
              {' '}
              <a href="#" className="btn btn-outline btn-xl">submit</a>
            </Form>
          </Container>
        </section>

      </div>
    );
  }
}
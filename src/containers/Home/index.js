import React from 'react';
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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
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

        <section className="features" id="features">
          <Container style={{width: '100%'}}>
            <div className="section-heading text-center">
              <h2>Get Started, and Help Make This App Better</h2>
              <p className="text-muted">
                Follow these easy steps to get started with the Expo Client, while we are getting the app ready for production on GooglePlay and the App Store.
              </p>
              <hr/>
            </div>
            <Row>
              <Col
                className="block"
                style={{ borderRight: '1px solid rgba(209, 210, 211, 0.3)'}}
                md="4"
              >
                <div>
                  <h2 className="block-titles" style={{color: 'rgba(0, 0, 32, 0.3)'}}>01</h2>
                  <h2 className="block-titles">Install Expo Client on your device</h2>
                  <p>Expo Client is a host app which runs the project in development before  publishing to the app store.</p>
                  <div>
                    <a href="#" className="btn btn-outline btn-md">
                      <AppleIcon style={{marginBottom: 4}} size="16"/> iOS
                    </a>
                    <a href="#" className="btn btn-outline btn-md">
                      <AndroidIcon style={{marginBottom: 4}} size="16"/> Android
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                className="block"
                style={{ borderRight: '1px solid rgba(209, 210, 211, 0.3)'}}
                md="4"
              >
                <h2 className="block-titles" style={{color: 'rgba(0, 0, 32, 0.3)'}}>02</h2>
                <h2 className="block-titles">Scan the projects QR code</h2>
                <p>Scan this QR code with your Expo mobile app to load the project immediately.</p>
                <img src={QRCode} style={{width: 200, height: 200}} alt=""/>
                <div>

                </div>
              </Col>
              <Col
                className="block"
                md="4"
                style={{borderBottom: 0}}
              >
                <h2 className="block-titles" style={{color: 'rgba(0, 0, 32, 0.3)'}}>03</h2>
                <h2 className="block-titles">Start reporting!</h2>
                <p>Once the app is loaded play with it, submit some reports, and please be sure to give us some feedback on your experience.</p>
                <div>

                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="screenshots" id="screenshots">
          <Container style={{width: '100%'}}>
            <div className="section-heading text-center">
              <h2>App Screenshots</h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis unde, ut sapiente et voluptatum facilis consectetur incidunt provident asperiores at necessitatibus nulla sequi voluptas libero quasi explicabo veritatis minima porro.              </p>
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
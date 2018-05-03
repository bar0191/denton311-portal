import React from 'react';
import Fire from '../../utils/fire';
import { Card, Container, Row, Col,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import ScrollArea from 'react-scrollbar';
import moment from 'moment';
import Header from '../../components/Header';
import ReportsModal from '../../components/ReportsModal';
import Loader from '../../images/spinning-circles.svg';

export default class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      reports: [],
      status: true,
      modal: false,
      modalReport: ' ',
      dropdownOpen: false,
      filterTitle: '',
      toFilter: false,

    }
  }

  componentDidMount() {
    this.getLatest100Reports();
  }

  toggleReportModal = (report) => {
    this.setState({
      modalReport: report,
      modal: !this.state.modal
    });
  };

  toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
  }

  getFilterData = (title, filter) => {
    this.setState({
      toFilter: filter,
      filterTitle: title,
    })
  };

  getLatest100Reports() {
    return Fire.database().ref().child('reports').limitToLast(200).on('value', (snapshot) => {
      let temp = [];
      snapshot.forEach((child) => {
        temp.unshift(child.val());
      });
      console.log(temp);
      this.setState({ reports: temp });
    });
  }

  render() {
    const styles = {
      title: {
        fontSize: 20,
        color: '#444',
      },
      subTitle: {
        lineHeight: 0.3,
        fontSize: 14
      }
    };

    const externalCloseBtn =
        <button
            className="close"
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={this.toggleReportModal}>
        &times;
        </button>;

    return (
      <div>
        <Header headerTitle="Reports"/>
        <Container>
          <Dropdown style={{ marginTop: 25, marginLeft: 75}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                  Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.getFilterData('', false)}>
                  All
                </DropdownItem>
                <DropdownItem header>Reported Issues</DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Pothole', true)}>
                  Pothole
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Dead Animal', true)}>
                  Dead Animal
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Blocked Driveway', true)}>
                  Blocked Driveway
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Graffiti', true)}>
                  Graffiti
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Illegal Parking', true)}>
                  Illegal Parking
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Illegal Dumping', true)}>
                  Illegal Dumping
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Street Sign', true)}>
                  Street Sign
                </DropdownItem>
                <DropdownItem onClick={() => this.getFilterData('Other', true)}>
                  Other
                </DropdownItem>
              </DropdownMenu>
          </Dropdown>
          <Card style={{maxWidth: 750}} className="report-card">
            <ScrollArea>
              <div>
                {Array.from(this.state.reports).map((report, index) => (
                  report.submitPublicly && this.state.toFilter ? report.title === this.state.filterTitle &&
                    <div
                      key={index}
                      onClick={() => {this.toggleReportModal(report)}}
                    >
                      <div className="item-container">
                        <div>
                          <h5>{report.title}</h5>
                          <p style={styles.subTitle}>
                            {report.address.length > 25 ? report.address.substr(0, 25) + "..." : report.address}
                          </p>
                          <p style={styles.subTitle}>
                            {report.status + ' ' + moment(report.dateCreated, moment.ISO_8601).fromNow()}
                          </p>
                        </div>
                        {
                          report.imageOne ?
                            <img style={{ height: 125, width: 125 }} src={"data:image/jpg;base64," + report.imageOne} />
                            : <img style={{ height: 125, width: 125 }} src={"data:image/jpg;base64," + report.mapSnapshot} />
                        }
                      </div>
                    </div> :
                    <div
                    key={index}
                    onClick={() => {this.toggleReportModal(report)}}
                  >
                    <div className="item-container">
                      <div>
                        <h5>{report.title}</h5>
                        <p style={styles.subTitle}>
                          {report.address.length > 25 ? report.address.substr(0, 25) + "..." : report.address}
                        </p>
                        <p style={styles.subTitle}>
                          {report.status + ' ' + moment(report.dateCreated, moment.ISO_8601).fromNow()}
                        </p>
                      </div>
                      {
                        report.imageOne ?
                          <img style={{ height: 125, width: 125 }} src={"data:image/jpg;base64," + report.imageOne} />
                          : <img style={{ height: 125, width: 125 }} src={"data:image/jpg;base64," + report.mapSnapshot} />
                      }
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
          <ReportsModal extBtn={externalCloseBtn} report={this.state.modalReport} isOpen={this.state.modal} toggle={this.toggleReportModal}/>
        </Container>
      </div>
    );
  }
}

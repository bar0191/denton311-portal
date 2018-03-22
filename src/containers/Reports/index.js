import React from 'react';
import Fire from '../../utils/fire';
import { Card, Container, Row, Col } from 'reactstrap';
import ScrollArea from 'react-scrollbar';
import moment from 'moment';
import Header from '../../components/Header';

export default class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      status: true,
    }
  }

  componentDidMount() {
    this.getLatest100Reports();
  }

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

    return (
      <div>
        <Header headerTitle="Reports"/>
        <Container>
          <Card className="report-card">
            <ScrollArea>
              <div>
                {Array.from(this.state.reports).map((report, index, arr) => (
                  report.submitPublicly ?
                    <div
                      key={index}
                      onClick={() => { }}
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
                    </div> : null
                ))}
              </div>
            </ScrollArea>
          </Card>
        </Container>
      </div>
    );
  }
}
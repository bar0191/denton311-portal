import React from 'react';
import '../../styles/App.css';

export default class Report extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Reports</h1>
        </header>
        <p className="App-intro">
          This is the reports page
        </p>
      </div>
    );
  }
}
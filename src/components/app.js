import React, { Component } from 'react';
import AlertListContainer from '../containers/AlertListContainer'
import AlertSimpleManagerContainer from '../containers/AlertSimpleManagerContainer';

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Simple app for showing alerts in React + Redux</h1>
        <AlertListContainer />
        <AlertSimpleManagerContainer />
      </div>
    );
  }
}

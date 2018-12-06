import React, { Component } from 'react';
import AlertList from './AlertList'
import AlertSimpleManager from './AlertSimpleManager';

export default class App extends Component {
  render() {
    return (
      <div>
          React simple starter
        <AlertList />
        <AlertSimpleManager />
      </div>
    );
  }
}

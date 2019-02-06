import React, { Component } from 'react';
import Header from './components/header/';
import List from './components/list/'

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <List />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Main from './layouts/Main.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;

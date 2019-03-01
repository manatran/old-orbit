import React, { Component } from 'react';
import './App.css';
import LoginHeader from './components/headers/LoginHeader';
import SmallHeader from './components/headers/SmallHeader';
import Navigation from './components/navigation';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <LoginHeader />
        <div className="body">
          <Sidebar />
          <main>
            <SmallHeader />
            henlo
          </main>
        </div>
      </div>
    );
  }
}

export default App;

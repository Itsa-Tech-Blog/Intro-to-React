import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/SideBar'
import Form from './components/Form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="right-side-container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          <Form messageFromApp={'woohoo, I am passing data from the App component to you!'}/>
          </header>
        </div>
      </div>
    );
  }
}

export default App;

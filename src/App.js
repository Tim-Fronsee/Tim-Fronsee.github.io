import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
			{"Welcome to Tim's Hub!"}
          </h1>
		  <h2>
			{"UNDER CONTSRUCTION"}
		  </h2>
		  <Button
			variant="contained"
			color="primary"
			href="https://github.com/Tim-Fronsee">
			GitHub Page
		  </Button>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './bridgelabz_owler_20160302_231507_original.png';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      title: "Hello from Bridgelabz"
    }
  }
  render(){
  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
  }
}

export default App;

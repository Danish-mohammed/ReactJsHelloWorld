import React from 'react';
import logo from './bridgelabz_owler_20160302_231507_original.png';
import './App.css';

class App extends React.Component {
  url='https://www.bridgelabz.com/';
  constructor(){
    super()
    this.state= {
      title: "Hello from Bridgelabz"
    }
  }

  handleClick = (event) => {
    console.log("save button is clicked!",event);
    window.open(this.url,"_blank");
  }
  render(){
  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      <img src={logo} onClick={this.handleClick} className="App-logo" alt="logo" />
    </div>
  );
  }
}

export default App;

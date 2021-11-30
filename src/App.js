import React from 'react';
import logo from './bridgelabz_owler_20160302_231507_original.png';
import './App.css';

class App extends React.Component {
  url='https://www.bridgelabz.com/';
  constructor(){
    super()
    this.state= {
      userName: ''
    }
  }

  handleClick = (event) => {
    console.log("save button is clicked!",event);
    window.open(this.url,"_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    this.setState({userName: event.target.value})
  }

  render(){
  return (
    <>
    <div className="App">
      <h1>Hello {this.state.userName} from Bridgelabz</h1>
      <img src={logo} onClick={this.handleClick} className="App-logo" alt="logo" />
    </div>
    <div className="App">
      <input onChange={this.onNameChange} />
    </div>
    </>
  );
  }
}

export default App;

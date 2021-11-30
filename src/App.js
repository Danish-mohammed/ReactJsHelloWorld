import React from 'react';
import logo from './bridgelabz_owler_20160302_231507_original.png';
import './App.css';

class App extends React.Component {
  url='https://www.bridgelabz.com/';
  constructor(){
    super()
    this.state= {
      userName: '',
      nameError: ''
    }
  }

  handleClick = (event) => {
    console.log("save button is clicked!",event);
    window.open(this.url,"_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }else {
      this.setState({nameError: 'Name is inCorrect'})
    }
  }

  render(){
  return (
    <html>
    <body>
    <>
    <div className="App">
      <h1>Hello {this.state.userName} from Bridgelabz</h1>
      <img src={logo} onClick={this.handleClick} className="App-logo" alt="logo" />
    </div>
    <div className="App">
      <input onChange={this.onNameChange} />
      <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
      <p><b>At BridgeLabz, we are a techie Community of</b></p>
    <ul>
        <li>Thinkers</li>
        <li>Builders</li>
        <li>Techonologist</li>
    </ul>
    <p> Working together to keep the Tech Employability of Engineeers alive and accessible,
         so Tech Companies worldwide can get contributors and creators for Technology Solutions. 
         We Believe this act of human collaboration across an employability
        platform is essential to individual growth and our collective future.</p>
        <p>To know more about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a> to learn even more about our mission i.e <strong>Employability To All</strong></p>

        </div>
    </>
    </body>
    </html>
 
  );
  }
}

export default App;

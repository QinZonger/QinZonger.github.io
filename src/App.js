import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  add } from './method';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  componentDidMount(){
     let arr = ['a','b','c','d','t','g','d','r','4','2','6','88','1','0','i','7','9'] 
     let n = 10 //中间截取几位
     console.log(add(arr,n))
  }
}

export default App;

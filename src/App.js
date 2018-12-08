import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
      <div class="row">
      <div class="col"><label>Skill :</label></div>
      <div class="col"><input type="text"/></div>      
      </div>
      <div class="row">
      <div class="col text-right"><button>save</button></div>
      </div>
      </div>
    );
  }
}

export default App;

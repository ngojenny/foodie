import React, { Component } from 'react';
import './App.scss';

import Title from './components/Title/Title';

class App extends Component {
  render() {
    return (
      <div className="page-home">
        <div className="wrapper">
          <Title text="foodie"/>
        </div>
      </div>
    );
  }
}

export default App;

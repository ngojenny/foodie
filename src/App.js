import React, { Component } from 'react';
import firebase from 'firebase';

import Title from './components/Title/Title';
import Button from './components/Button/Button';

const config = {
  apiKey: "AIzaSyDFAU2wNQuaPOrN10MIaI8RiHKC3amjwzg",
  authDomain: "foodie-f2a16.firebaseapp.com",
  databaseURL: "https://foodie-f2a16.firebaseio.com",
  projectId: "foodie-f2a16",
  storageBucket: "foodie-f2a16.appspot.com",
  messagingSenderId: "283200990093"
};

firebase.initializeApp(config);

class App extends Component {
  login = () =>{
    console.log('logging in')
  }
  render() {
    return (
      <div className="page-home">
        <div className="wrapper">
          <Title text="foodie" />
          <Button text="Login" type="primary" category="button" eventHandler={this.login}/>
        </div>
      </div>
    );
  }
}

export default App;

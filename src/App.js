import React, { Component } from 'react';
import firebase from 'firebase';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

import Title from './components/Title/Title';
import Button from './components/Button/Button';

var config = {
  apiKey: "AIzaSyDFAU2wNQuaPOrN10MIaI8RiHKC3amjwzg",
  authDomain: "foodie-f2a16.firebaseapp.com",
  databaseURL: "https://foodie-f2a16.firebaseio.com",
  projectId: "foodie-f2a16",
  storageBucket: "foodie-f2a16.appspot.com",
  messagingSenderId: "283200990093"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user
        })
      }
    })
  }

  login = () =>{
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      })
      console.log(result);
    })
  }
  render() {
    return (
      <Router>
        <div className="page-home">
          <div className="wrapper">
            <Title text="foodie" />
            <Button text="Login" type="primary" category="button" eventHandler={this.login}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

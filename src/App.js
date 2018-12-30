import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import firebase from './firebase';

import './App.scss';
import Login from './components/Login/Login';

const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    auth.onAuthStateChanged((user) => {
      console.log('getcurrentuser', user)
      if(user) {
        this.setState({
          user
        })
        return
      }
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route 
            exact path="/login" 
            render={() => this.state.user ? <Redirect to="/" />
            :
            <Login />}
          />
          <Route 
            path="/"
            render={() => this.state.user ? 'show groups page'
            :
            <Login />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import firebase from './firebase';

import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  login = () =>{
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      })
    })
  }

  logout = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      })
    })
  }

  getCurrentUser = () => {
    auth.onAuthStateChanged((user) => {
      console.log('getcurrentuser', user)
      if(!this.state.user && user) {
        this.setState({
          user,
        })
        return
      }
    })
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header loggedIn={this.state.user ? true : false} logout={this.logout} />
          <Switch>
            <Route 
              exact path="/login" 
              render={() => this.state.user ? <Redirect to="/" />
              :
              <Login login={this.login}/>}
            />
            <Route 
              path="/"
              render={() => this.state.user ? 'show groups page'
              :
              <Login login={this.login} />}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

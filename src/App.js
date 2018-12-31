import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import firebase from './firebase';

import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';

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
          <main className={this.state.user ? `main-content-area` : `main-content-area--logged-out`}>
            {this.state.user &&
              <Nav />
            }
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
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;

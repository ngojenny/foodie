import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import firebase from './firebase';

import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
import Groups from './components/Groups/Groups';
import NewGroupForm from './components/NewGroupForm/NewGroupForm';

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
            <Card>
              <Switch>
                <Route 
                  exact path="/login" 
                  render={() => this.state.user ? <Redirect to="/" />
                  :
                  <Login login={this.login}/>}
                />
                <Route 
                  exact path="/"
                  render={() => this.state.user ? <Groups />
                  :
                  <Login login={this.login} />}
                />
                <Route 
                  exact path="/create-group" 
                  render={() => this.state.user ? <NewGroupForm />
                  :
                  <Redirect to="/" />}
                />
              </Switch>
            </Card>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;

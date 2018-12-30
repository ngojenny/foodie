import React, { Component } from 'react';
import firebase from '../../firebase';

import Title from '../Title/Title';
import Button from '../Button/Button';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Login extends Component {
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
      <div className="login">
        <div className="wrapper">
          <Title text="foodie" />
          <Button text="Login" type="primary" category="button" eventHandler={this.login}/>
        </div>
      </div>
    );
  }
}

export default Login;

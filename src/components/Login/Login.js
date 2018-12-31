import React, { Component } from 'react';
import firebase from '../../firebase';

import Title from '../Title/Title';
import Button from '../Button/Button';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const Login = (props) => {
  return (
    <div className="login">
      <div className="wrapper">
        <Title text="foodie" logo={true} />
        <Button text="Login" type="primary" category="button" eventHandler={props.login}/>
      </div>
    </div>
  );
}

export default Login;

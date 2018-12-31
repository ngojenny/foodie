import React from 'react';

import Title from '../Title/Title';
import Button from '../Button/Button';

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

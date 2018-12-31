import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Fragment>
      {props.category === 'button' &&
        <button onClick={props.eventHandler} className={`btn btn--${props.type}`}>{props.text}</button>
      }
      {props.category === 'link' &&
        <Link to={props.path} className={`btn btn--${props.type}`}>{props.text}</Link>
      }
    </Fragment>
  )
}

export default Button


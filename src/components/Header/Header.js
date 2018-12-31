import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__logo">foodie</h1>
      {props.loggedIn &&
        <button className="header__logout" onClick={props.logout}><i className="fas fa-sign-out-alt"></i></button>
      }
    </header>
  )
}
export default Header;
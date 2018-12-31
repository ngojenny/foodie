import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title/Title';

const Nav = () => {
  return (
    <aside className="sidebar">
      <Title text="foodie"/>
      <nav className="sidebar__nav">
        <Link className="sidebar__link" to="/">Groups</Link>
        <Link className="sidebar__link" to="/search">Search</Link>
        <Link className="sidebar__link" to="/messages">Messages</Link>
      </nav>
    </aside>
  )
}

export default Nav;
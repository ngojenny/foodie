import React, { Component } from 'react';

import Title from '../Title/Title';
import Button from '../Button/Button';

class Groups extends Component {
  render() {
    return (
      <div className="groups">
        <div className="groups__top-container">
          <Title text="Groups" />
          <div className="groups__button-container">
            <Button type="primary" category="link" path="/create-group" text="New group" />
            <Button type="secondary" category="link" path="/join-group" text="Join group" />
          </div>
        </div>
      </div>
    )
  }
}

export default Groups;
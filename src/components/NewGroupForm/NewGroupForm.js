import React, { Component } from 'react';

import Title from '../Title/Title';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

class NewGroupForm extends Component {
  constructor() {
    super();
    this.state = {
      newGroupName: '',
      newGroupNameError: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      [`${e.target.id}Error`]: null
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //validate form before pushing
    const { newGroupName } = this.state;
    if(newGroupName.trim().length === 0) {
      this.setState({
        newGroupNameError: `Please enter a valid name.`
      })
      return;
    }

    //push to firebase
  }

  render() {
    return (
      <div className="new-group">
        <Title text="Create group" />
        <form action="" onSubmit={this.handleSubmit}>
          <InputField
            type="text"
            id="newGroupName"
            labelText="Name"
            placeholder="e.g. Friends"
            handleChange={this.handleChange}
            value={this.state.newGroupName}
            error={this.state.newGroupNameError}
          />
          <Button type="primary" category="button" text="Create"/>
        </form>
      </div>
    )
  }
}

export default NewGroupForm;
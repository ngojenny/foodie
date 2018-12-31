import React from 'react';

const InputField = (props) => {
  return (
    <div className="input-field">
      <label className={props.hide ? `visuallyhidden` : `input-field__label`} htmlFor={props.id}>{props.labelText}</label>
      <input 
        className="input-field__input"
        type={props.type} 
        placeholder={props.placeholder} 
        required={props.required} 
        id={props.id}
        onChange={props.handleChange}
        value={props.value}
      />
      <span className="input-field__error">{props.error}</span>
    </div>
  )
}

export default InputField;
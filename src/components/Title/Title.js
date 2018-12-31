import React from 'react';

const Title = (props) => {
  return(
    <div className="heading-title">
      <h2 className={props.logo ? `heading-title__text heading-title__text--logo` : `heading-title__text`}>{props.text}</h2>
    </div>
  )
}

export default Title;
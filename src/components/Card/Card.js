import React from 'react';

const Card = (props) => {
  return (
    <section className="main-card">
      {props.children}
    </section>
  )
}

export default Card;


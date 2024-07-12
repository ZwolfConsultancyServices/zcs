import React from 'react';
import '../card/Card.css'; 

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;

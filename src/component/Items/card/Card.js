import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card-container rounded mx-3">
      <div className="card-content">
        <img src={props.image}></img>
        <h2 className="text-center">{props.title}</h2>
        <small className="text-center">{props.subtitle}</small>
      </div>
    </div>
  );
}

export default Card;

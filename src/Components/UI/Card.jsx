import React from "react";
import "./Card.css";
import UserInput from "../UserInput/UserInput";
const Card = () => {
  return (
    <div className="Card-container">
      <div className="card_input-section">
        <UserInput />
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import "./Card.css";
import UserInput from "../UserInput/UserInput";
const Card = () => {
  const [userData, setUserData] = useState([]);
  const userinfo = (data) => {
    setUserData((dataOfUser) => {
      return [data, ...dataOfUser];
    });
    console.log(userData, "ARR");
  };
  return (
    <div className="Card-container">
      <div className="card_input-section">
        <UserInput userInfoData={userinfo} />
      </div>
    </div>
  );
};

export default Card;

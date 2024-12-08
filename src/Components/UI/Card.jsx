import React, { useState } from "react";
import "./Card.css";
import UserInput from "../UserInput/UserInput";
import ItemContent from "./ItemContent";
const Card = () => {
  const [userData, setUserData] = useState([]);
  const userinfo = (data) => {
    setUserData((dataOfUser) => {
      return [...dataOfUser, data];
    });
    console.log(userData, "ARR");
  };
  return (
    <div className="Card-container">
      <div className="card_input-section">
        <UserInput userInfoData={userinfo} />
      </div>
      <div className="notes-container">
        {userData.map((value, i) => {
          return <ItemContent key={i} value={value.data} />;
        })}
      </div>
    </div>
  );
};

export default Card;

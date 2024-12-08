import React, { useState } from "react";
import "./Card.css";
import UserInput from "../UserInput/UserInput";
import ItemContent from "./ItemContent";
const Card = () => {
  const [userData, setUserData] = useState([]);
  const deleteItemHandler = (itemToDelete) => {
    setUserData((prevItem) => {
      prevItem.filter((item) => {
        return item !== itemToDelete;
      });
    });
    console.log(userData, "NEW ARRAY");
  };
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
        {userData.length === 0 ? (
          <h1 className="dev-note">No notes at this time</h1>
        ) : (
          userData.map((value, i) => {
            return (
              <ItemContent
                key={i}
                value={value.data}
                onDelete={deleteItemHandler}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Card;

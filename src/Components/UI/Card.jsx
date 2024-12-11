import React, { useState } from "react";
import "./Card.css";
import UserInput from "../UserInput/UserInput";
import ItemContent from "./ItemContent";
const Card = () => {
  const [userData, setUserData] = useState([]);
  const deleteItemHandler = (keyProp) => {
    setUserData((prevItem) => {
      return prevItem.filter((item) => {
        return item.id !== keyProp;
      });
    });
  };
  const userinfo = (data) => {
    setUserData((dataOfUser) => {
      return [...dataOfUser, data];
    });
  };
  const clearAllHandler = () => {
    setUserData([]);
  };
  return (
    <div className="Card-container">
      <div className="card_input-section">
        <UserInput addHandler={userinfo} clearAllHandler={clearAllHandler} />
      </div>
      <div className="notes-container">
        {userData.length === 0 ? (
          <h1 className="dev-note">No notes at this time</h1>
        ) : (
          userData.map((value) => {
            return (
              <ItemContent
                id={value.id}
                key={value.id}
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

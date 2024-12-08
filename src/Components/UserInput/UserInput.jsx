import React, { useState } from "react";
import "./UserInput.css";
import Button from "../Other/Button";
const UserInput = (props) => {
  const [userData, setUserData] = useState("");
  const [valid, setValid] = useState(true);
  const dataHandler = (e) => {
    setUserData(e.target.value);
    if (e.target.value.trim().length > 0) {
      setValid(true);
    }
    console.log("onChange: ", userData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userData.trim().length === 0) {
      setValid(false);
      return;
    }
    const dataObject = {
      data: userData,
    };
    setUserData("");
    props.userInfoData(dataObject);
  };
  return (
    <div className="UserInput-container">
      <form onSubmit={submitHandler}>
        <div className={`input-container ${!valid ? "invalid" : ""}`}>
          <input
            placeholder="Input notes here"
            type="text"
            value={userData}
            onChange={dataHandler}
          />
        </div>
        <div className="button-container">
          <Button type="submit" />
          <button type="button" onClick={props.clearAllHandler}>
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;

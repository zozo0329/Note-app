import React, { useState } from "react";
import "./UserInput.css";
import Button from "../Other/Button";
const UserInput = (props) => {
  const [userData, setUserData] = useState("");
  const dataHandler = (e) => {
    setUserData(e.target.value);
    console.log("onChange: ", userData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const dataObject = {
      data: userData,
    };
    setUserData("");
    props.userInfoData(dataObject);
  };

  return (
    <div className="UserInput-container">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <input type="text" value={userData} onChange={dataHandler} />
        </div>
        <div className="button-container">
          <Button type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UserInput;

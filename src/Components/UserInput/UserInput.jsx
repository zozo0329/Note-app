import React from "react";
import "./UserInput.css";
import Button from "../Other/Button";
const UserInput = () => {
  return (
    <div className="UserInput-container">
      <form>
        <div className="input-container">
          <input type="text" />
        </div>
        <div className="button-container">
          <Button />
        </div>
      </form>
    </div>
  );
};

export default UserInput;

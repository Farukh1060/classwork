import React from "react";

const User_card = ({ user_name, age, location }) => {
  return (
    <div className="child">
      <div>User name :{user_name}</div>
      <div> Age :{age}</div>
      <div>Location :{location}</div>
      <div />
    </div>
  );
};

export default User_card;

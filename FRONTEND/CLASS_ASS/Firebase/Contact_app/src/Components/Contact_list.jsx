import React from "react";
import Contact_card from "./Contact_card";

const Contact_list = ({ contacts,deletecontact,edithandler}) => {
//   console.log(contacts);

  return (
    <>
      {contacts.map((ele) => {
       return <Contact_card key={ele.id} ele={ele} deletecontact={deletecontact} edithandler={edithandler}></Contact_card>;
      })}
    </>
  );
};

export default Contact_list;
